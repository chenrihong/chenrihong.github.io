---
sidebar_position: 1
---

# 低代码设计

:::tip[RxJS]

Introduction
RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.

[https://rxjs.dev/guide/overview](https://rxjs.dev/guide/overview)

:::

<!-- :::danger[Take care]

This action is dangerous

::: -->

在我司做完第一版本的低代码平台后，我们发现现有低代码组件间的互动非常多。目前采用的是emitter事件来驱动交互，总感觉差点意思。
总结来说，代码缺乏组织。

我思考很久了，我觉得 RxJS 可以比较完美地解决这个问题。于是我建立本文档，用来收集目前项目中遇到的难题。并用 RxJS 解决方案尝试解决。

待文档成熟之后，重构现有代码。