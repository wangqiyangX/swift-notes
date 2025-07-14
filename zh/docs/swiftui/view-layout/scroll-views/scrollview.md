# ScrollView

> 可滚动的视图。

::: tip 版本支持
iOS 13.0+
iPadOS 13.0+
Mac Catalyst 13.0+
macOS 10.15+
tvOS 13.0+
visionOS 1.0+
watchOS 6.0+
:::

```swift
struct ScrollView<Content> where Content : View
```

## 被提到

## 概述

滚动视图在可滚动内容区域内显示其内容。当用户执行适合平台的滚动手势时，滚动视图会调整底层内容的可见部分。 ScrollView 可以水平、垂直或同时滚动，但不提供缩放功能。

在以下示例中，一个 ScrollView 允许用户滚动浏览一个包含 100 个 [Text]() 视图的 [VStack]() 。列表后的图像显示了右侧的滚动视图临时可见的滚动条；您可以通过 ScrollView 初始化器的 showsIndicators 参数禁用它。

```swift
var body: some View {
    ScrollView {
        VStack(alignment: .leading) {
            ForEach(0..<100) {
                Text("Row \($0)")
            }
        }
    }
}
```

![SwiftUI-ScrollView-rows-with-indicator](https://docs-assets.developer.apple.com/published/0eab3cad2c7924af68ccb8d604044ce1/SwiftUI-ScrollView-rows-with-indicator@2x.png){.light-only}

![SwiftUI-ScrollView-rows-with-indicator](https://docs-assets.developer.apple.com/published/b75bb31baf8db0bf6ff9ca7f598b02a9/SwiftUI-ScrollView-rows-with-indicator~dark@2x.png){.dark-only}

## 控制滚动位置

您可以通过使用 `defaultScrollAnchor(_:)` 视图修饰符来影响滚动视图的初始滚动位置。

提供一个值为 `center` 的锚点，以便在滚动视图在两个轴上可滚动时，滚动视图从其内容的中心开始。

```swift
ScrollView([.horizontal, .vertical]) {
    // initially centered content
}
.defaultScrollAnchor(.center)
```

或者提供一个值为 `bottom` 的对齐方式，以便在垂直轴上可滚动的滚动视图从其内容的底部开始。

```swift
ScrollView {
    // initially bottom aligned content
}
.defaultScrollAnchor(.bottom)
```

在滚动视图初次渲染后，用户可以滚动滚动视图的内容。

要执行编程滚动，需要将一个或多个滚动视图包装在 [ScrollViewReader](scrollviewreader.md) 中。

## 创建滚动视图

### `init(_:content:)`

> 创建一个新的实例，该实例在给定轴的方向上可滚动，并且在滚动时可以显示指示器。

::: tip 版本要求
iOS 13.0+
iPadOS 13.0+
Mac Catalyst 13.0+
macOS 10.15+
tvOS 13.0+
visionOS 1.0+
watchOS 6.0+
:::

```swift
nonisolated
init(
    _ axes: Axis.Set = .vertical,
    @ViewBuilder content: () -> Content
)
```

当 Content 遵循 View 时可用。

#### 参数

##### `axes`

滚动视图的可滚动轴。默认轴是垂直轴。

##### `content`

创建可滚动视图的视图构建器。

## 配置滚动视图

> 实例属性

### content

滚动视图的内容。

```swift
var content: Content
```

### axes

滚动视图的可滚动轴，默认值为 `Axis.vertical` 。

```swift
var axes: Axis.Set { get set }
```

### showsIndicators

一个值，指示滚动视图是否以适合平台的方式显示内容偏移的可滚动组件，默认值为 true 。

```swift
var showsIndicators: Bool { get set }
```

## 支持类型

### body

滚动视图的内容和行为。

```swift
@MainActor @preconcurrency
var body: some View { get }
```
