<div align="center">
  <p style="font-size: 18px;">Lightweight, simple, flexible, automatic translation internationalization tool for Vue 2</p>

English | [简体中文](https://github.com/i18n-pro/vue2/blob/v1.0.0/README_zh-CN.md)



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/vue2.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/vue2 "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/vue2 "npm-download")](https://www.npmjs.com/package/@i18n-pro/vue2 "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/vue2?style=social "github-stars")](https://github.com/i18n-pro/vue2/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/vue2/main "last-commit")](https://github.com/i18n-pro/vue2/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/vue2 "github-issues")](https://github.com/i18n-pro/vue2/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/vue2/branch/main/graph/badge.svg?token=B9R4W0F1XI "codecov")](https://codecov.io/gh/i18n-pro/vue2 "codecov")

![demo](https://s3.bmp.ovh/imgs/2023/09/04/12f2e6bea736d1a5.gif)

</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Requirement](#requirement)<br/>
  [Features](#features)<br/>
  [Live Demo](#live-demo)<br/>
  [Principle](#principle)<br/>
  [License](#license)<br/>

</details>


# Vision
To make internationalization easy and enjoyable 😄💪🏻
# Requirement

>The current library is only applicable to  `Vue 2` . If you need to support  `Vue 3` , please click  [i18n-pro/vue](https://github.com/i18n-pro/vue)  to view
* vue >= **2.0.0** < **3.0.0**
* i18n-pro >= **2.0.0**


# Features

* **lightweight**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/vue2?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/vue2 "bundlesize")
* The following features are inherited from  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 
   * **simple**
   * **flexible**
   * **automatic-translation**
   * **keyless**


# Live Demo

* with$ = true
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/vue2-demo/main?file=README.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/vue2-demo/#main?file=README.md)
* with$ = false
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/vue2-demo/simple?file=README.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/vue2-demo/tree/simple?file=README.md)


# Principle
This library is implemented based on  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro")  combined with  `Vue` 's  `Prototype Properties, Reactivity System and Plugin System` 

Mainly composed of  `1`  parts
* createI18n



**createI18n**：Initialize internationalization state and return its plugin function



A simple example is as follows
```typescript react
// App.vue
<template>
  <div>{{ $t('hello world') }}</div>
</template>

// main.ts
import Vue from 'vue'
import App from './App.vue'
import { createI18n } from '@i18n-pro/vue2'

const i18n = createI18n({
  namespace: "i18n-example",
  locale: "en",
  langs: {
    zh: {
      'hello world': '你好世界',
    },
    ja:{
      "hello world": "こんにちは世界",
    },
  }
})

Vue.use(i18n)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

# Help Document

>To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br />The  `i18n-pro`  related link in the current document is based on the  `2.0.0`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage
* Current Library
   * [Quick Start](https://github.com/i18n-pro/vue2/blob/v1.0.0/docs/dist/USAGE.md)
   * [API](https://github.com/i18n-pro/vue2/blob/v1.0.0/docs/dist/API.md)
   * [Changelog](https://github.com/i18n-pro/vue2/blob/v1.0.0/docs/dist/CHANGELOG.md)
* i18n-pro
   * [Command Line](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/COMMAND_LINE.md)
   * [Matching Rules](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/MATCH_RULE.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/Q&A.md)
   * [Translation Log](https://github.com/i18n-pro/core/blob/v2.0.0/docs/dist/OUTPUT_LOG.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu