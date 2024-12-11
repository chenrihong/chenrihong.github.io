---
title: 解决KeepAlive缓存问题
authors: [chenrihong]
date: 2024-12-04
tags: [思考]
---

# 思考

## 背景

我司的系统是采用 Vue3.0 框架，前后分离模式，用页签来加载路由，且需要缓存这些页签，以防切换回来时数据丢失。所以采用了 keep-alive。

随之而来的是内存占用高的问题，用户用着用着，内存就超过1GB，初期甚至到2到3GB以上。经过一系统优化，内存还是1GB以上，客户现场用360浏览器还会白屏。

因为浏览器内存限制，360会切到兼容模式，导致白屏。谷歌浏览器则会崩溃。

<!--truncate-->

## 动态路由配置

动态路由组件，要缓存，需要配置路由的 `key=route.fullPath`。

```js
<router-view v-slot="{ Component, route }">
    <transition :name="subsystemConfig.routerAnimate" appear>
        <keep-alive :max="5">
            <component :is="Component" :key="route.fullPath" />
        </keep-alive>
    </transition>
</router-view>
```

随之带来的问题是，关闭页签时，无法释放组件。

## 返回一个全新组件实例

返回新组件，同时可以对组件命名，以方便使用 `keep-alive `的 `include` 配置

```js
 <router-view v-slot="{ Component, route }">
    <transition :name="subsystemConfig.routerAnimate" appear>
        <keep-alive :include="includesArr" :max="5">
            <component :is="wrap(Component, route)" 
            :key="route.query.__id || route.path" />
        </keep-alive>
    </transition>
</router-view>
```

wrap:

```js
wrap(component: any, route: any) {
    const { query } = route;
    let key = query.__id;
    if (!key) return component;
    if (key === null) {
        console.error('__id is null');
    }
    let wrapper;
    if (this.cachedWrapperComponents.has(key)) {
        wrapper = this.cachedWrapperComponents.get(key);
    } else {
        wrapper = defineComponent({
            name: key,
            render: () => component
        })
        this.includesArr.push(key);
        this.cachedWrapperComponents.set(key, wrapper);
    }
    return wrapper;
},
```

## 页签关闭时清理 includesArr 数组

在页签关闭时，清理 `includesArr`，以使用 `keep-alive` 自动清理组件缓存。

到这里，我们以为能做都做了，全部交给 `Vue` 框架就行，事实是，所有组件的  `unmounted` 钩子都没有触发。内存占用还是很高。



直到最近，用户发现缓存导致保存数据失败问题，我们重新审视这一块功能。

## 终局

我们同事发现，先对 includesArr 清理再关闭路由，不会触发组件`unmounted` 钩子。

而关闭时，先把路由切走，再去清理 includesArr 会触发组件 `unmounted` 钩子。

如此，我觉得应该是正常了，我们可以在 `unmounted` 中写一些释放内存的代码了。