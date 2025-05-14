# 动态加载 import

你在 TypeScript 源码中看到的可能是 **动态 `import()` 表达式**（也称为 "动态导入"），这是 ECMAScript 2020 标准中的特性，TypeScript 也完全支持。这个特性允许你在代码执行过程中按需加载模块，且可以在函数、条件语句等任何地方使用。

---

### 核心区别：静态 `import` vs 动态 `import()`
|                      | 静态 `import` 语句             | 动态 `import()` 表达式              |
|----------------------|-------------------------------|-------------------------------------|
| **语法**             | `import { x } from 'module'`  | `const module = await import('module')` |
| **位置**             | 只能出现在模块顶层            | 可出现在任何地方（函数、条件判断等）|
| **加载时机**         | 编译时静态加载                | 运行时动态按需加载                  |
| **返回值**           | 直接获取导出内容              | 返回 `Promise`                      |
| **典型用途**         | 常规依赖加载                  | 代码分割、按需加载、条件加载        |

---

### 动态 `import()` 的典型用法
```typescript
// 在异步函数中使用
async function loadModule() {
  const myModule = await import('./myModule');
  myModule.doSomething();
}

// 条件加载
if (someCondition) {
  const utils = await import('./utils');
  utils.helperFunction();
}

// 动态路径（注意类型安全）
const moduleName = 'myModule' as string;
const dynamicModule = await import(`./${moduleName}`);
```

---

### TypeScript 的注意事项
1. **配置要求**：确保 `tsconfig.json` 中 `module` 设置为 `esnext` 或支持动态导入的模块系统：
   ```json
   {
     "compilerOptions": {
       "module": "esnext",
       "target": "es2017"
     }
   }
   ```

2. **类型推断**：动态导入的模块默认类型是 `any`，可通过类型断言或 `.d.ts` 文件增强类型安全：
   ```typescript
   interface MyModule {
     doSomething: () => void;
   }
   const myModule = await import('./myModule') as MyModule;
   ```

3. **代码分割**：与打包工具（如 Webpack/Rollup）结合使用时，动态导入会自动生成 chunk 文件，优化加载性能。

---

### 为什么能在函数中使用？
动态 `import()` 本质上是一个返回 `Promise` 的普通函数调用（尽管是语言内置的），因此它可以出现在任何允许表达式的地方。而传统静态 `import` 是声明式语法，受限于模块顶层。

---

### 常见误区
- **误用静态 `import` 语法**：以下代码会报错：
  ```typescript
  function wrong() {
    import { x } from 'module'; // 错误！静态 import 不能在函数内
  }
  ```
  必须改用动态导入：
  ```typescript
  async function correct() {
    const module = await import('module');
    const x = module.x;
  }
  ```

---

### 实际应用场景
1. **路由级代码分割**（React/Vue 等框架常用）：
   ```typescript
   // React 中动态加载组件
   const LazyComponent = React.lazy(() => import('./Component'));
   ```

2. **功能按需加载**：
   ```typescript
   document.getElementById('btn').addEventListener('click', async () => {
     const heavyModule = await import('./heavyModule');
     heavyModule.runHeavyTask();
   });
   ```

3. **多语言动态加载**：
   ```typescript
   async function loadLocale(lang: string) {
     return await import(`./locales/${lang}.json`);
   }
   ```

---

### 总结
你看到的函数内 `import` 实际上是动态导入语法 `import()`，这是现代 JavaScript/TypeScript 中实现按需加载模块的标准方式。合理使用该特性可以显著优化应用性能和加载速度。