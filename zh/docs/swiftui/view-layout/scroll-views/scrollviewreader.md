# ScrollViewReader

> 一个通过与代理合作来滚动到已知子视图，从而提供编程滚动的视图。

::: tip 版本要求
iOS 14.0+
iPadOS 14.0+
Mac Catalyst 14.0+
macOS 11.0+
tvOS 14.0+
visionOS 1.0+
watchOS 7.0+
:::

```swift
@frozen
struct ScrollViewReader<Content> where Content : View
```

## 概述

滚动视图阅读器的内容视图构建器接收一个 [ScrollViewProxy]() 实例；您可以使用代理的 `scrollTo(_:anchor:)` 方法来执行滚动。

以下示例创建一个包含 100 个视图的 [ScrollView](scrollview.md) ，这些视图共同显示一个颜色渐变。它还包含两个按钮，一个在顶部，一个在底部。顶部按钮告诉 [ScrollViewProxy]() 滚动到底部按钮，反之亦然。

```swift
@Namespace var topID
@Namespace var bottomID


var body: some View {
    ScrollViewReader { proxy in
        ScrollView {
            Button("Scroll to Bottom") {
                withAnimation {
                    proxy.scrollTo(bottomID)
                }
            }
            .id(topID)


            VStack(spacing: 0) {
                ForEach(0..<100) { i in
                    color(fraction: Double(i) / 100)
                        .frame(height: 32)
                }
            }


            Button("Top") {
                withAnimation {
                    proxy.scrollTo(topID)
                }
            }
            .id(bottomID)
        }
    }
}


func color(fraction: Double) -> Color {
    Color(red: fraction, green: 1 - fraction, blue: 0.5)
}
```

![SwiftUI-ScrollViewReader-scroll-to-bottom-button](https://docs-assets.developer.apple.com/published/8735b201580f404d498324837faf9233/SwiftUI-ScrollViewReader-scroll-to-bottom-button@2x.png){.light-only}

::: warning 要点
在执行 `content` 视图构建器期间，您不能使用 ScrollViewProxy ；这样做会导致运行时错误。相反，只有在 `content` 内创建的操作可以调用代理，例如手势处理程序或视图的 `onChange(of:perform:)` 方法。
:::

## 创建滚动视图阅读器

### init(content:)

> 创建一个可以对其子滚动视图执行编程滚动的实例。

```swift
init(@ViewBuilder content: @escaping (ScrollViewProxy) -> Content)
```

### 参数

#### `content`

视图阅读器的内容，包含一个或多个滚动视图。此视图构建器接收一个 `ScrollViewProxy` 实例，您可以使用它来执行滚动。

## 配置视图阅读器

> 实例属性

### `content`

创建阅读器内容的视图构建器。

```swift
var content: (ScrollViewProxy) -> Content
```
