# ScrollPosition

> 定义滚动视图在其内容中滚动的语义位置的类型。

::: tip
iOS 18.0+
iPadOS 18.0+
Mac Catalyst 18.0+
macOS 15.0+
tvOS 18.0+
visionOS 2.0+
watchOS 11.0+
:::

```swift
struct ScrollPosition
```

## 概述

使用此类型以及 `View/scrollPosition(_:)` 修饰符来控制滚动视图的位置。您可以使用此类型以多种方式进行滚动：

- 滚动到具有提供身份的视图
- 滚动到一个具体的偏移量
- 滚动到边缘

您可以创建一个具有指定视图标识类型的滚动位置

```swift
@State private var position = ScrollPosition(idType: MyItem.ID.self)
```

SwiftUI 将使用该类型以及滚动视图的滚动目标布局中的视图，以编程方式滚动到这些视图，并在用户滚动时更新 `viewID` 属性。使用 `View/scrollTargetLayout()` 修饰符来配置包含您的滚动目标的布局。

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
.scrollPosition($scrolledID)
```

您可以通过使用 `viewID(type:)` 查询当前滚动的 ID。

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

对于视图身份位置，SwiftUI 将尝试在发生可能导致其被系统滚出视图的事件时，保持在提供的绑定中指定身份的视图可见。这些事件的一些示例包括：

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
.scrollPosition($scrolledID, anchor: .bottom)
```

例如，提供一个值 `bottom` 将更倾向于选择最底部的视图，并更倾向于滚动到与底部对齐的视图。

如果没有提供锚点，SwiftUI 在使用滚动位置以编程方式滚动到视图时，将滚动最小的量。

## 初始化器

### `init(id:anchor:)`

> 创建一个新的滚动位置，指向具有提供的标识值的视图。

```swift
init(
    id: some Hashable & Sendable,
    anchor: UnitPoint? = nil
)
```

ID 的类型指示滚动视图应该查找的滚动目标布局中视图的 ID 类型。

### `init(idType:)`

> 创建一个新的自动滚动位置。

```swift
init(idType: (some Hashable & Sendable).Type = Never.self)
```

您可以为滚动位置提供一个类型。该类型应与滚动目标布局中与视图关联的 ID 类型匹配。滚动视图将查找这些视图以更新滚动位置的值。

### `init(idType:edge:)`

> 创建一个新的滚动位置，以滚动到提供的边缘。

```swift
init(
    idType: (some Hashable & Sendable).Type = Never.self,
    edge: Edge
)
```

您可以提供一个类型，以指示滚动视图在其滚动目标布局中查找具有该类型 ID 的视图。

### `init(idType:point:)`

> 创建一个新的滚动位置，以滚动到提供的点。

```swift
init(
    idType: (some Hashable & Sendable).Type = Never.self,
    point: CGPoint
)
```

您可以为滚动位置提供一个类型。该类型应与滚动目标布局中与视图相关联的 ID 类型匹配。滚动视图将查找这些视图以更新滚动位置的值。

### `init(idType:x:)`

> 创建一个新的滚动位置，以滚动到提供的 y 值。

```swift
init(
    idType: (some Hashable & Sendable).Type = Never.self,
    x: CGFloat
)
```

您可以为滚动位置提供一个类型。该类型应与滚动目标布局中与视图相关联的 ID 类型匹配。滚动视图将查找这些视图以更新滚动位置的值。

### `init(idType:x:y:)`

> 创建一个新的滚动位置，以滚动到提供的 x 值。

```swift
init(
    idType: (some Hashable & Sendable).Type = Never.self,
    x: CGFloat,
    y: CGFloat
)
```

您可以为滚动位置提供一个类型。该类型应与滚动目标布局中与视图相关联的 ID 类型匹配。滚动视图将查找这些视图以更新滚动位置的值。

### `init(idType:y:)`

> 创建一个新的滚动位置，以滚动到提供的 y 值。

```swift
init(
    idType: (some Hashable & Sendable).Type = Never.self,
    y: CGFloat
)
```

您可以为滚动位置提供一个类型。该类型应与滚动目标布局中与视图相关联的 ID 类型匹配。滚动视图将查找这些视图以更新滚动位置的值。

## 实例属性

### `edge`

> 如果配置为该位置，则为滚动视图的定位边缘。

```swift
var edge: Edge? { get }
```

### `isPositionedByUser`

> 滚动视图是否已被用户定位。

```swift
var isPositionedByUser: Bool { get set }
```

您可以向该属性写入内容，以控制滚动视图是否像已被用户定位一样运行。如果位置有一个非零的边/点值，在将此属性设置为 true 时，该值将变为零。

### `point`

> 滚动视图的定位点（如果配置为该位置）。

```swift
var point: CGPoint? { get }
```

### `viewID`

> 如果配置为位于滚动视图中的视图，或者用户已滚动经过一个具有匹配类型 id 的视图，则该视图的类型擦除 id 将位于滚动视图中。

```swift
var viewID: (any Hashable & Sendable)? { get }
```

### `x`

> 滚动视图的位置 x 值（如果配置为该位置）。

```swift
var x: CGFloat? { get }
```

### `y`

> 滚动视图的位置 y 值（如果配置为该位置）。

```swift
var y: CGFloat? { get }
```

## 实例方法

### `scrollTo(edge:)`

> 将滚动视图的位置滚动到您提供的边缘。

```swift
mutating func scrollTo(edge: Edge)
```

### `scrollTo(id:anchor:)`

> 将滚动视图的位置滚动到具有您提供的标识值和锚点的视图。

```swift
mutating func scrollTo(
    id: some Hashable & Sendable,
    anchor: UnitPoint? = nil
)
```

通过使用 `View/scrollTargetLayout()` 修改器提供的标识值，通知滚动视图应使用哪种布局查找视图。

### `scrollTo(point:)`

> 将滚动视图的位置滚动到您提供的点。

```swift
mutating func scrollTo(point: CGPoint)
```

滚动视图将限制此值，仅滚动到其实际内容的大小。

### `scrollTo(x:)`

> 将滚动视图的位置滚动到您提供的 x 值。

```swift
mutating func scrollTo(x: CGFloat)
```

滚动视图根据其内容内边距选择 y 值，并将此值限制为仅滚动到其实际内容的大小。

### `scrollTo(x:y:)`

> 将滚动视图的位置滚动到您提供的 x 和 y 值。

```swift
mutating func scrollTo(
    x: CGFloat,
    y: CGFloat
)
```

滚动视图将限制此值，仅滚动到其实际内容的大小。

### `scrollTo(y:)`

> 将滚动视图的位置滚动到您提供的 y 值。

```swift
mutating func scrollTo(y: CGFloat)
```

滚动视图根据其内容内边距选择 x 值，并将此值限制为仅滚动到其实际内容的大小。

### `viewID(type:)`

> 如果配置为位于滚动视图中的视图的 id，或者用户已滚动经过一个 id 类型匹配的视图，则该视图的 id 将显示在滚动视图中。

```swift
func viewID<T>(type: T.Type) -> T? where T : Hashable, T : Sendable
```
