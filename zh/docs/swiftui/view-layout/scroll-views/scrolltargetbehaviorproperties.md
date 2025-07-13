# ScrollTargetBehaviorProperties

> 影响滚动视图的属性，适用于滚动目标行为。

::: tip
iOS 18.4+
iPadOS 18.4+
Mac Catalyst 18.4+
macOS 15.4+
tvOS 18.4+
visionOS 2.4+
watchOS 11.4+
:::

```swift
struct ScrollTargetBehaviorProperties
```

## 初始化器

### `init()`

> 创建一组默认属性。

```swift
init()
```

## 实例属性

### `limitsScrolls`

> 此滚动目标行为是否应限制滚动视图默认的滚动距离。当启用时，滚动视图更倾向于滚动较短的距离。默认情况下，此选项是未启用的。

```swift
var limitsScrolls: Bool { get set }
```
