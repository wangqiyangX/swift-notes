# ScrollViewProxy

> 一个支持在视图层次结构中对可滚动视图进行编程滚动的代理值。

::: tip 版本要求
iOS 14.0+
iPadOS 14.0+
Mac Catalyst 14.0+
macOS 11.0+
tvOS 14.0+
visionOS 1.0+
watchOS 7.0+
:::

```swift
struct ScrollViewProxy
```

## 概述

您不会直接创建 `ScrollViewProxy` 的实例。相反，您的 [`ScrollViewReader`](scrollviewreader.md) 在其 `content` 视图构建器中接收 `ScrollViewProxy` 的实例。您可以在此视图构建器中使用操作，例如按钮和手势处理程序或 `onChange(of:perform:)` 方法，以调用代理的 `scrollTo(_:anchor:)` 方法。

## 执行滚动

> 实例方法

### `scrollTo(_:anchor:)`

> 扫描代理包含的所有滚动视图，寻找第一个具有标识符 id 的子视图，然后滚动到该视图。

```swift
func scrollTo<ID>(
    _ id: ID,
    anchor: UnitPoint? = nil
) where ID : Hashable
```

### 参数

#### `id`

要滚动到的子视图的标识符。

#### `anchor`

滚动操作的对齐行为。

如果 `anchor` 是 `nil` ，则此方法找到标识视图的容器，并滚动最小量以使标识视图完全可见。

如果 `anchor` 不是 `nil` ，它定义了在识别的视图和滚动视图中对齐的点。例如，将 `anchor` 设置为 `top` 会将识别的视图的顶部对齐到滚动视图的顶部。同样，将 `anchor` 设置为 `bottom` 会将识别的视图的底部对齐到滚动视图的底部，依此类推。
