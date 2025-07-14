# PagingScrollTargetBehavior

> 将滚动目标对齐到基于容器几何的滚动行为。

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
struct PagingScrollTargetBehavior
```

## 概述

在以下示例中，懒加载堆栈中的每个视图在两个方向上都是灵活的，滚动视图会停靠在容器对齐的边界上。

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

## 初始化器

### `init()`

> 创建分页滚动行为。
