# `scrollTargetBehavior(_:)`

> 设置在提供的轴上可滚动视图的滚动行为。

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
func scrollTargetBehavior(_ behavior: some ScrollTargetBehavior) -> some View
```

## 讨论

可滚动视图默认使用其减速率和滚动手势的状态来计算滚动手势应该结束的位置。滚动行为允许自定义此逻辑。您可以提供自己的 [ScrollTargetBehavior](scrolltargetbehavior.md) 或使用 SwiftUI 提供的内置行为之一。

## 分页行为

SwiftUI 提供了一种 [PagingScrollTargetBehavior]() 行为，它使用滚动视图的几何形状来决定允许滚动结束的位置。

在以下示例中，懒加载堆栈中的每个视图在两个方向上都是灵活的，滚动视图将停靠在容器对齐的边界上。

```swift
ScrollView {
    LazyVStack(spacing: 0.0) {
        ForEach(items) { item in
            FullScreenItem(item)
        }
    }
}
.scrollTargetBehavior(.paging)
```

## 视图对齐行为

SwiftUI 提供了一种 [ViewAlignedScrollTargetBehavior]() 滚动行为，它将始终停靠在单个视图的几何形状上。

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
.safeAreaPadding(.horizontal, 20.0)
```

您可以使用 `scrollTargetLayout(isEnabled:)` 修饰符配置应使用哪些视图进行对齐。将此修饰符应用于布局容器，如 [LazyVStack]() 或 [HStack]() ，该布局中的每个单独视图都将被考虑用于对齐。
