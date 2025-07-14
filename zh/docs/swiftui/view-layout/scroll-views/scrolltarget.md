# ScrollTarget

> 定义滚动视图应该尝试滚动到的目标类型。

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
struct ScrollTarget
```

## 获取滚动目标

> 实例属性

### `anchor`

> 在可滚动视图的可见区域内，矩形应对齐的锚点。

```swift
var anchor: UnitPoint?
```

### `rect`

> 可滚动视图应该尝试包含的矩形区域。

```swift
var rect: CGRect
```
