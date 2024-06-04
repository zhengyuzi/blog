# 关于BFC

## 什么是BFC？

**块格式化上下文（Block Formatting Context，BFC）**，是CSS2.1规范定义的，关于CSS渲染定位的一个概念。BFC它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，BFC提供了一个环境，HTML在这个环境中按照一定的规则进行布局。

简单来说就是，BFC是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。

## 如何形成BFC?

下列方式会创建块格式化上下文（BFC）：

- 根元素（```<html>```）
- 浮动元素（元素的 ```float``` 不是 ```none```）
- 绝对定位元素（元素的 ```position``` 为 ```absolute``` 或 ```fixed```）
- 行内块元素（元素的 ```display``` 为 ```inline-block```）
- 表格单元格（元素的 ```display``` 为 ```table-cell```，HTML表格单元格默认为该值）
- 表格标题（元素的 ```display``` 为 ```table-caption```，HTML表格标题默认为该值）
- 匿名表格单元格元素（元素的 ```display``` 为 ```table```、```table-row```、```table-row-group```、```table-header-group```、```table-footer-group```）
- ```overflow```计算值不为 ```visible``` 或 ```clip``` 的块元素
- ```display``` 值为 ```flow-root``` 的元素
- ```contain``` 值为 ```layout```、```content``` 或 ```paint``` 的元素
- 弹性元素（```display``` 为 ```flex``` 或 ```inline-flex``` 元素的直接子元素，如果它们本身既不是弹性、网格也不是表格容器。
- 网格元素（```display``` 为 ```grid``` 或 ```inline-grid``` 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。

## BFC的规则

- BFC就是一个块级元素，块级元素会在垂直方向一个接一个的排列
- BFC就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
- 垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠
- 计算BFC的高度时，浮动元素也参与计算

## BFC解决了什么问题

1. 清除浮动
2. 父元素高度塌陷
3. margin重叠
