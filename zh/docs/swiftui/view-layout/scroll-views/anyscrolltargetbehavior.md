# AnyScrollTargetBehavior

> 一种类型擦除的滚动目标行为。

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
@frozen
struct AnyScrollTargetBehavior
```

## 概述

将此提供给 `scrollTargetBehavior(_:)` 修饰符。当基础行为发生变化时，应用此行为的滚动视图将会更新。

使用此方法在运行时动态控制滚动目标行为。例如，您可以在紧凑尺寸类别中提供分页行为，而在其他情况下提供视图对齐行为。

```swift
@Environment(\.horizontalSizeClass) var sizeClass


var body: some View {
    ScrollView { ... }
        .scrollTargetBehavior(scrollTargetBehavior)
}


 var scrollTargetBehavior: some ScrollTargetBehavior {
    sizeClass == .compact
        ? AnyScrollTargetBehavior(.paging)
        : AnyScrollTargetBehavior(.viewAligned)
}
```

## 初始化器

### `init(_:)`

> 创建一个新的类型擦除滚动目标行为。

```swift
init(_ base: some ScrollTargetBehavior)
```

## 实例属性

### `base`

> 类型擦除的滚动目标行为。

```swift
var base: any ScrollTargetBehavior
```
