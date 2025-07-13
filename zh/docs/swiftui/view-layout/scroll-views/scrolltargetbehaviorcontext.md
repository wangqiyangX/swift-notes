# ScrollTargetBehaviorContext

> 滚动目标行为更新其滚动目标的上下文。

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
@dynamicMemberLookup
struct ScrollTargetBehaviorContext
```

## 获取滚动目标行为上下文

> 实例属性

### `axes`

> 可滚动视图可滚动的轴。

```swift
var axes: Axis.Set { get }
```

### `containerSize`

> 可滚动视图的容器大小。

```swift
var containerSize: CGSize { get }
```

这是滚动视图的边界大小，减去应用于滚动视图的任何内边距（如安全区域）。

### `contentSize`

> 可滚动视图内容的大小。

```swift
var contentSize: CGSize { get }
```

### `originalTarget`

> 滚动手势开始时的原始目标。

```swift
var originalTarget: ScrollTarget { get }
```

### `velocity`

> 可滚动视图滚动手势的当前速度。

```swift
var velocity: CGVector { get }var velocity: CGVector { get }
```

## 访问上下文

> 实例下标

### `subscript(dynamicMember:)`

```swift
subscript<T>(dynamicMember keyPath: KeyPath<EnvironmentValues, T>) -> T { get }
```
