---
date: 2025-07-10
author: wangqiyangx
x: "@wangqiyangx"
---

# `Button` 入门教程

> 用于启动操作的控件。

## 初始化一个 `Button`

```swift
Button {
    print("点击")
} label: {
    Label("登陆", systemImage: "arrow.up")
}
```

## `Button` 样式

### 内置样式

通过使用 `buttonStyle(_:)` 修改器将这些样式应用到 `Button` 上，SwiftUI 为 `Button` 提供了如下几种内置样式：

- `automatic`
- `accessoryBar`
- `accessoryBarAction`
- `bordered`
- `borderedProminent`
- `borderless`
- `card`
- `link`
- `plain`
- `glass`

需要注意的是，某些样式是为特定平台提供的。

下面具体介绍一下上述的每种内置样式

#### `automatic`

默认样式

#### `accessoryBar`

#### `accessoryBarAction`

### 自定义样式
