# `scrollPosition(id:anchor:)`

> 将绑定与此视图中的滚动视图滚动时更新的绑定关联。

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
func scrollPosition(
    id: Binding<(some Hashable)?>,
    anchor: UnitPoint? = nil
) -> some View
```

## 讨论

使用此修饰符与 `scrollTargetLayout()` 修饰符一起，以了解当前正在滚动的视图的身份。当滚动视图滚动时，绑定将更新为最前面/最顶部视图的身份。

使用 `scrollTargetLayout()` 修饰符来配置包含您的滚动目标的布局。在以下示例中，最顶部的 `ItemView` 将随着滚动视图的滚动而使用 `scrolledID` 绑定进行更新。

```swift
@Binding var items: [Item]
@Binding var scrolledID: Item.ID?


ScrollView {
    LazyVStack {
        ForEach(items) { item in
            ItemView(item)
        }
    }
    .scrollTargetLayout()
}
.scrollPosition(id: $scrolledID)
```

您可以写入绑定以滚动到具有提供身份的视图。

```swift
@Binding var items: [Item]
@Binding var scrolledID: Item.ID?


ScrollView {
    // ...
}
.scrollPosition(id: $scrolledID)
.toolbar {
    Button("Scroll to Top") {
        scrolledID = items.first
    }
}
```

当发生可能导致视图被系统滚出可视区域的事件时，SwiftUI 将尝试保持在提供的绑定中指定身份的视图可见。这些事件的一些示例包括：

- 滚动视图内容背后的数据被重新排序。
- 滚动视图的大小发生变化，例如在 macOS 上调整窗口大小或在 iOS 上旋转时。
- 滚动视图最初布局其内容时默认以最上面的视图为基准，但绑定具有不同视图的身份。

您可以为此修饰符提供一个锚点，用于：

- 影响系统选择哪个视图作为在滚动视图滚动时将更新提供绑定的身份值的视图。
- 在为视图编写新的绑定值时，控制滚动到视图时的对齐方式。

例如，提供一个值 `bottom` 将更倾向于选择最底部的视图，并更倾向于滚动到与底部对齐的视图。

如果没有提供锚点，SwiftUI 在使用滚动位置以编程方式滚动到视图时，将滚动最小的量。
