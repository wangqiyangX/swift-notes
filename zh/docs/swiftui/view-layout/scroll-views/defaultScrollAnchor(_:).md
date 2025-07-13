# `defaultScrollAnchor(_:)`

> 将锚点关联起来，以控制默认情况下应渲染滚动视图内容的哪个部分。

::: tip 版本要求
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
func defaultScrollAnchor(_ anchor: UnitPoint?) -> some View
```

## 讨论

使用此修饰符来指定一个锚点，以控制滚动视图内容的哪个部分应该最初可见，以及滚动视图如何处理内容大小的变化。

提供一个 `UnitPoint/center` 的值，以便在滚动视图在两个轴上可滚动时，滚动视图从其内容的中心开始。

```swift
ScrollView([.horizontal, .vertical]) {
    // initially centered content
}
.defaultScrollAnchor(.center)
```

提供一个值 UnitPoint/bottom 以使滚动视图在垂直轴可滚动时从其内容的底部开始。

```swift
@Binding var items: [Item]
@Binding var scrolledID: Item.ID?


ScrollView {
    LazyVStack {
        ForEach(items) { item in
            ItemView(item)
        }
    }
}
.defaultScrollAnchor(.bottom)
```

用户可能会滚动离开最初定义的滚动位置。当滚动视图的内容大小发生变化时，它可能会参考锚点以了解如何重新定位内容。
