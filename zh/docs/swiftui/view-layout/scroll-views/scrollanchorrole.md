# ScrollAnchorRole

> 定义滚动锚点作用的类型。

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
struct ScrollAnchorRole
```

## 概述

您可以使用 `defaultScrollAnchor(_:)` 修饰符将 [UnitPoint]() 与 [ScrollView](scrollview.md) 关联。默认情况下，系统使用此点来实现不同类型的行为，包括：

- 滚动视图应最初滚动到的位置
- 滚动视图应如何处理内容大小或容器大小的变化
- 滚动视图应如何对齐小于其容器大小的内容

您可以通过为这些不同角色分配不同的单位点来进一步自定义此行为。

## 类型属性

### alignment

> 该 role 影响当内容的大小小于滚动视图的容器大小时，滚动视图应如何对齐其内容。

```swift
static var alignment: ScrollAnchorRole { get }
```

### initialOffset

> 影响滚动视图初始滚动位置的角色。

```swift
static var initialOffset: ScrollAnchorRole { get }
```

### sizeChanges

> 影响滚动视图在其内容或容器大小发生变化时应如何调整其内容偏移量的角色。

```swift
static var sizeChanges: ScrollAnchorRole { get }
```
