# ViewAlignedScrollTargetBehavior

> 将滚动目标对齐到基于视图几何的滚动行为。

```swift
struct ViewAlignedScrollTargetBehavior
```

## 概述

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

您可以使用 `scrollTargetLayout(isEnabled:)` 修饰符配置哪些视图应被用于停靠。将此修饰符应用于像 LazyVStack 或 HStack 这样的布局容器，布局中的每个单独视图都将被考虑用于对齐。

您可以通过使用 `ViewAlignedScrollTargetBehavior.LimitBehavior` 类型自定义视图对齐行为是否限制一次可以滚动的视图数量。提供一个 `always` 的值，以始终使该行为仅允许少数视图一次滚动。

默认情况下，视图对齐行为将在紧凑的水平尺寸类别中限制可在水平轴上滚动的视图数量，在紧凑的垂直尺寸类别中限制可在垂直轴上滚动的视图数量，其他情况下则不对可滚动的视图数量施加任何限制。

## 创建目标行为

### `init(limitBehavior:)`

> 创建一个视图对齐滚动行为。

```swift
init(limitBehavior: ViewAlignedScrollTargetBehavior.LimitBehavior = .automatic)
```

### ViewAlignedScrollTargetBehavior.LimitBehavior

> 定义一次可以滚动的视图数量的类型。

```swift
struct LimitBehavior
```

#### 获取限制行为

##### `automatic`

> 自动限制行为。

```swift
static var automatic: ViewAlignedScrollTargetBehavior.LimitBehavior { get }
```

默认情况下，该行为将在紧凑的水平尺寸类别中受到限制，其他情况下则不受限制。

##### `always`

> 始终限制行为。

```swift
static var always: ViewAlignedScrollTargetBehavior.LimitBehavior { get }
```

始终限制可滚动视图的数量。

##### `never`

> 永不限制行为。

```swift
static var never: ViewAlignedScrollTargetBehavior.LimitBehavior { get }
```

永不限制可滚动的视图数量。

#### 类型属性

##### `alwaysByFew`

> 始终限制少数视图的行为。

```swift
static var alwaysByFew: ViewAlignedScrollTargetBehavior.LimitBehavior { get }
```

单次交互可以滚动的视图数量限制为少量视图，而不是一次一个视图。视图的数量是自动确定的。

##### `alwaysByOne`

> 始终为一个视图的限制行为。

```swift
static var alwaysByOne: ViewAlignedScrollTargetBehavior.LimitBehavior { get }
```

将单次交互可以滚动的视图数量限制为一个视图。

## 初始化器

### `init(anchor:)`

> 创建一个与提供的锚点对齐的滚动行为视图。

```swift
init(anchor: UnitPoint?)
```

### `init(limitBehavior:anchor:)`

> 创建一个与提供的限制行为和锚点对齐的滚动行为视图。

```swift
init(
    limitBehavior: ViewAlignedScrollTargetBehavior.LimitBehavior,
    anchor: UnitPoint?
)
```
