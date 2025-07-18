# 滚动视图

> 使用户能够滚动查看当前显示不完全的内容。

## 概述

当视图的内容无法适应显示时，您可以将视图包装在一个 [ScrollView](scrollview.md) 中，以便让人们在一个或多个轴上滚动。使用视图修饰符配置滚动视图。例如，您可以设置滚动指示器的可见性或在给定维度上滚动的可用性。

![scroll-views-hero](https://docs-assets.developer.apple.com/published/fc9311e17b13443bf22043d6155e0e7f/scroll-views-hero@2x.png)

您可以在滚动视图中放置任何视图类型，但您最常使用滚动视图作为布局容器，以容纳太多元素而无法适应显示。对于某些放置在滚动视图中的容器视图，如懒加载堆栈，容器在视图可见或几乎可见之前不会加载视图。对于其他视图，如常规堆栈和网格，容器会一次性加载所有内容，而不管滚动状态如何。

列表和表格隐式包含一个滚动视图，因此您无需为这些容器类型添加滚动功能。然而，您可以使用适用于显式滚动视图的相同视图修饰符来配置它们的隐式滚动视图。

有关设计指导，请参阅《人机界面指南》中的[滚动视图](https://developer.apple.com/design/Human-Interface-Guidelines/scroll-views)。
