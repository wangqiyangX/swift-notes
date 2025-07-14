# `scrollposition(_:anchor:)`

> 将滚动位置的绑定与此视图中的滚动视图关联。

::: tip 版本要求
iOS 18.0+
iPadOS 18.0+
Mac Catalyst 18.0+
macOS 15.0+
tvOS 18.0+
visionOS 2.0+
watchOS 11.0+
:::

```swift
nonisolated
func scrollPosition(
    _ position: Binding<ScrollPosition>,
    anchor: UnitPoint? = nil
) -> some View
```

## 讨论

使用此修饰符来控制滚动视图的位置。您可以使用 `ScrollPosition` 类型以多种方式进行滚动：

- 滚动到具有提供身份的视图
- 滚动到一个具体的偏移量
- 滚动到边缘

您可以创建一个具有指定视图标识类型的滚动位置

```swift
@State private var position
    = ScrollPosition(idType: MyItem.ID.self)
```

SwiftUI 将使用该标识以及滚动视图的滚动目标布局中的视图，以编程方式滚动到这些视图，并在用户滚动时更新 `viewID` 属性。使用 `scrollTargetLayout()` 修饰符来配置包含您的滚动目标的布局。

当滚动到具有标识的视图时，SwiftUI 将使用在滚动视图的可见区域内滚动的最上方视图的值来更新位置。

在以下示例中，位置绑定将更新以反映滚动视图滚动时最上方的 `ItemView`。

```swift
@Binding var items: [MyItem]
@State private var position: ScrollPosition
    = .init(idType: MyItem.ID.self)


ScrollView {
    LazyVStack {
        ForEach(items) { item in
            ItemView(item)
        }
    }
    .scrollTargetLayout()
}
.scrollPosition($position)
```

您可以通过使用 `viewID(type:)` 查询当前滚动的 id。

```swift
let viewID: MyItem.ID = position.viewID(type: MyItem.ID.self)
```

虽然大多数用例将使用基于视图身份的滚动，但您也可以使用滚动位置类型来滚动到偏移量或边缘。例如，您可以创建一个按钮，通过指定边缘来滚动到滚动视图的底部。

```swift
Button("Scroll to bottom") {
    position.scrollTo(edge: .bottom)
}
```

在配置滚动位置时，SwiftUI 将尝试保持该位置稳定。对于边缘，这意味着如果内容大小发生变化，保持顶部对齐的滚动视图滚动到顶部。对于某个点，当内容大小发生变化时，SwiftUI 不会尝试保持该确切的偏移量滚动，也不会在变化时更新为新的偏移量。

对于视图身份位置，SwiftUI 将尝试在发生可能导致其被系统滚出可视区域的事件时，保持在提供的绑定中指定身份的视图可见。这些事件的一些示例包括：

- 滚动视图内容背后的数据被重新排序。
- 滚动视图的大小发生变化，例如在 macOS 上调整窗口大小或在 iOS 上旋转时。
- 滚动视图最初布局其内容时默认以最上面的视图为基准，但绑定具有不同视图的身份。

您可以提供一个锚点，以基于视图身份的位置进行：

- 影响系统选择哪个视图作为在滚动视图滚动时将更新提供绑定的身份值的视图。
- 在为视图编写新的绑定值时，控制滚动到视图时的对齐方式。

在下面的示例中，最底部的视图将被选择来更新位置绑定。

```swift
ScrollView {
    LazyVStack {
        ForEach(items) { item in
            ItemView(item)
        }
    }
    .scrollTargetLayout()
}
.scrollPosition($position, anchor: .bottom)

```

例如，提供一个值 bottom 将更倾向于选择最底部的视图，并更倾向于滚动到与底部对齐的视图。
