# `scrollTargetLayout(isEnabled:)`

> 将最外层布局配置为滚动目标布局。

::: tip
iOS 17.0+
iPadOS 17.0+
Mac Catalyst 17.0+
macOS 14.0+
tvOS 17.0+
visionOS 1.0+
watchOS 10.0+
:::

```swift
nonisolated
func scrollTargetLayout(isEnabled: Bool = true) -> some View
```

## 讨论

此修饰符与 [ViewAlignedScrollTargetBehavior]() 一起工作，以确保滚动视图与基于视图的内容对齐。

将此修饰符应用于 ScrollView 中的布局容器，如 LazyHStack 或 VStack ，这些容器包含您的 ScrollView 的主要重复内容。

```swift
ScrollView(.horizontal) {
    LazyHStack(spacing: 10.0) {
        ForEach(items) { item in
            ItemView(item)
        }
    }
    .scrollTargetLayout()
}
.scrollTargetBehavior(.viewAligned)
```

滚动目标布局作为一种便利，便于对布局中的每个视图应用 View/scrollTarget(isEnabled:) 修饰符。

滚动目标布局将确保任何嵌套在主布局中的目标布局不会也成为滚动目标布局。

```swift
LazyHStack { // a scroll target layout
    VStack { ... } // not a scroll target layout
    LazyHStack { ... } // also not a scroll target layout
}
.scrollTargetLayout()
```
