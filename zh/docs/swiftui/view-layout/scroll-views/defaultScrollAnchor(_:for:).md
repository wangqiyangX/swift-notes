# `defaultScrollAnchor(_:for:)`

> 将视图与锚点关联起来，以控制在特定情况下滚动视图的位置。

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
func defaultScrollAnchor(
    _ anchor: UnitPoint?,
    for role: ScrollAnchorRole
) -> some View
```

## 讨论

您可以使用 `defaultScrollAnchor(_:)` 修饰符将 [UnitPoint]() 与 [ScrollView](scrollview.md) 关联。默认情况下，系统使用此点来实现不同类型的行为，包括：

- 滚动视图应最初滚动到的位置
- 滚动视图应如何处理内容大小或容器大小的变化
- 滚动视图应如何对齐小于其容器大小的内容

您可以通过为这些不同的情况分配不同的单位点来进一步自定义此行为。

例如，您可以使用 `defaultScrollAnchor(_:)` 修饰符为所有情况提供 `bottom` 的值作为锚点，然后通过为某些情况提供不同的值来选择不使用它们。

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
.defaultScrollAnchor(.topLeading, for: .alignment)
```
