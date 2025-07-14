# ScrollTargetBehavior

> 定义可滚动视图滚动行为的类型。

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
protocol ScrollTargetBehavior
```

## 概述

可滚动视图默认使用其减速率和滚动手势的状态来计算滚动手势应该结束的位置。滚动行为允许自定义此逻辑。

您可以使用 `updateTarget(_:context:)` 方法定义滚动行为。

使用此方法，您可以控制用户在可滚动视图中可以滚动到哪里。例如，您可以通过以下方式创建一个自定义滚动行为，使其每 10 个点对齐：

```swift
struct BasicScrollTargetBehavior: ScrollTargetBehavior {
    func updateTarget(_ target: inout Target, context: TargetContext) {
        // Align to every 1/10 the size of the scroll view.
        target.rect.x.round(
            toMultipleOf: round(context.containerSize.width / 10.0))
    }
}
```

## 分页行为

SwiftUI 提供了内置的滚动行为。其中一种行为是 [PagingScrollTargetBehavior]() ，它使用滚动视图的几何形状来决定允许滚动结束的位置。

在以下示例中，懒加载堆栈中的每个视图在两个方向上都是灵活的，滚动视图将会停靠在容器对齐的边界上。

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

SwiftUI 还提供了一种 [ViewAlignedScrollTargetBehavior]() 滚动行为，它将始终停靠在单个视图的几何形状上。

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

您可以使用 `scrollTargetLayout(isEnabled:)` 修饰符配置哪些视图应被用于停靠。将此修饰符应用于像 LazyVStack 或 HStack 这样的布局容器，布局中的每个单独视图都将被考虑用于对齐。

同步使用符合此协议的类型与 `scrollTargetBehavior(_:)` 修饰符。

## 获取滚动目标行为

> 类型属性

### `paging`

> 将滚动目标对齐到基于容器几何的滚动行为。

```swift
static var paging: PagingScrollTargetBehavior { get }
```

在以下示例中，懒加载堆栈中的每个视图在两个方向上都是灵活的，滚动视图会调整到与容器对齐的边界。

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

### `viewAligned`

> 将滚动目标对齐到基于视图几何的滚动行为。

```swift
static var viewAligned: ViewAlignedScrollTargetBehavior { get }
```

当 Self 为 ViewAlignedScrollTargetBehavior 时可用。

当滚动视图应该始终将其滚动目标对齐到与视图几何形状对齐的矩形时，您会使用此行为。在以下示例中，滚动视图始终选择一个项目视图进行停靠。

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
.padding(.horizontal, 20.0)
```

您可以使用 `View/scrollTargetLayout()` 修饰符配置哪些视图应被用于停靠。将此修饰符应用于像 LazyVStack 或 HStack 这样的布局容器，布局中的每个单独视图都将被考虑用于对齐。

您可以通过使用 `ViewAlignedScrollTargetBehavior.LimitBehavior` 类型自定义视图对齐行为是否限制一次可以滚动的视图数量。提供一个 `ViewAlignedScrollTargetBehavior.LimitBehavior/always` 的值，以始终使该行为仅允许少数视图一次滚动。

默认情况下，视图对齐行为在紧凑的水平尺寸类别中限制其在水平轴上可滚动的视图数量，在紧凑的垂直尺寸类别中限制其在垂直轴上可滚动的视图数量，除此之外不对可滚动的视图数量施加任何限制。

### `viewAligned(limitBehavior:)`

> 将滚动目标对齐到基于视图几何的滚动行为。

```swift
static func viewAligned(limitBehavior: ViewAlignedScrollTargetBehavior.LimitBehavior) -> Self
```

当 Self 为 ViewAlignedScrollTargetBehavior 时可用。

当滚动视图应该始终将其滚动目标对齐到与视图几何形状对齐的矩形时，您会使用此行为。在以下示例中，滚动视图始终选择一个项目视图进行停靠。

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
.padding(.horizontal, 20.0)
```

您可以使用 `View/scrollTargetLayout()` 修饰符配置哪些视图应被用于停靠。将此修饰符应用于像 LazyVStack 或 HStack 这样的布局容器，布局中的每个单独视图都将被考虑用于对齐。

您可以通过使用 ViewAlignedScrollTargetBehavior.LimitBehavior 类型自定义视图对齐行为是否限制一次可以滚动的视图数量。提供一个 ViewAlignedScrollTargetBehavior.LimitBehavior/always 的值，以始终使该行为仅允许少数视图一次滚动。

默认情况下，视图对齐行为在紧凑的水平尺寸类别中限制其在水平轴上可滚动的视图数量，在紧凑的垂直尺寸类别中限制其在垂直轴上可滚动的视图数量，除此之外不对可滚动的视图数量施加任何限制。

## 更新建议的目标

> 实例方法

### `updateTarget(_:context:)`

> 更新可滚动视图应滚动到的建议目标。

```swift
func updateTarget(
    _ target: inout ScrollTarget,
    context: Self.TargetContext
)
```

系统在以下两种主要情况下调用此方法：

- 当滚动手势结束时，它会根据减速率计算出自然滚动到的位置。系统将此计算值作为此方法的目标提供。
- 当可滚动视图的大小发生变化时，它会根据新大小计算应该滚动到的位置，并将此计算值作为该方法的目标。

当可滚动视图的大小发生变化时，它会根据新大小计算应该滚动到的位置，并将此计算值作为该方法的目标。

### ScrollTargetBehavior.TargetContext

> 滚动行为更新滚动目标的上下文。

```swift
typealias TargetContext = ScrollTargetBehaviorContext
```

## 实例方法

### `properties(context:)`

> 行为的属性

```swift
func properties(context: Self.PropertiesContext) -> Self.Properties
```

提供了所需的默认实现。

## 类型别名

### ScrollTargetBehavior.Properties

> 滚动行为的属性

```swift
typealias Properties = ScrollTargetBehaviorProperties
```

### ScrollTargetBehavior.PropertiesContext

> 滚动行为的属性上下文。

```swift
typealias PropertiesContext = ScrollTargetBehaviorPropertiesContext
```

## 类型方法

### `viewAligned(anchor:)`

> 将滚动目标对齐到基于视图几何的滚动行为。

```swift
static func viewAligned(anchor: UnitPoint?) -> Self
```

当 Self 为 ViewAlignedScrollTargetBehavior 时可用。

#### 讨论

当滚动视图应该始终将其滚动目标对齐到与视图几何形状对齐的矩形时，您会使用此行为。在以下示例中，滚动视图始终选择一个项目视图进行停靠。

```swift
ScrollView(.horizontal) {
    LazyHStack(spacing: 10.0) {
        ForEach(items) { item in
            ItemView(item)
        }
    }
    .scrollTargetLayout()
}
.scrollTargetBehavior(.viewAligned(anchor: .center))
.padding(.horizontal, 20.0)
```

您可以使用 `View/scrollTargetLayout()` 修饰符配置哪些视图应被用于停靠。将此修饰符应用于像 LazyVStack 或 HStack 这样的布局容器，布局中的每个单独视图都将被考虑用于对齐。

您可以使用 `ViewAlignedScrollTargetBehavior.LimitBehavior` 类型自定义视图对齐行为是否限制一次可滚动的视图数量。如果提供 `ViewAlignedScrollTargetBehavior.LimitBehavior/always` 的值，则该行为始终只允许同时滚动几个视图。

您可以通过提供自定义锚点进一步自定义视图对齐行为在滚动视图可见区域内的对齐方式。默认情况下，该行为将视图对齐到滚动视图的顶部或前导边缘。

### `viewAligned(limitBehavior:anchor:)`

> 将滚动目标对齐到基于视图几何的滚动行为。

```swift
static func viewAligned(
    limitBehavior: ViewAlignedScrollTargetBehavior.LimitBehavior,
    anchor: UnitPoint?
) -> Self
```

当 Self 为 ViewAlignedScrollTargetBehavior 时可用。

#### 讨论

当滚动视图应该始终将其滚动目标对齐到与视图几何形状对齐的矩形时，您会使用此行为。在以下示例中，滚动视图始终选择一个项目视图进行停靠。

```swift
ScrollView(.horizontal) {
    LazyHStack(spacing: 10.0) {
        ForEach(items) { item in
            ItemView(item)
        }
    }
    .scrollTargetLayout()
}
.scrollTargetBehavior(.viewAligned(anchor: .center))
.padding(.horizontal, 20.0)
```

您可以使用 `View/scrollTargetLayout()` 修饰符配置哪些视图应被用于停靠。将此修饰符应用于像 LazyVStack 或 HStack 这样的布局容器，布局中的每个单独视图都将被考虑用于对齐。

您可以通过使用 `ViewAlignedScrollTargetBehavior.LimitBehavior` 类型自定义视图对齐行为是否限制一次可以滚动的视图数量。提供一个 `ViewAlignedScrollTargetBehavior.LimitBehavior/always`的值，以始终使该行为仅允许少数视图一次滚动。

您可以通过提供自定义锚点，进一步自定义视图对齐行为在滚动视图可见区域内的对齐方式。默认情况下，该行为会将视图对齐到滚动视图的顶部或前导边缘。
