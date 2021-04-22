# 教程

周子淼

[TOC]

## 全屏容器

全屏容器会根据浏览器当前页面的大小和比例自动对网页进行缩放，使得容器充满屏幕。

注意

1. 建议在全屏容器内使用百分比flex进行布局
2. 使用前将body的margin设置为0，否则会出现全屏容器无法全屏的现象

## 装饰

根据datav所提供的装饰样式，我们根据其适合的场景将其分为几个大类。

**TIP** 所有装饰均支持自定义颜色，使用方法如下

```html
<dv-decoration-1 :color="['#ffff80', '#ff80ff']" />
```
注意color前面必须有`:`符号，而其他属性例如style则不需要`:`符号。

color属性接受string类型取值，支持一主一副两个配色，主色在前，副色在后。颜色类型可以为关键字、十六进制、RGB和RGBA。

### 分割线及图表装饰

#### dv-decoration-1

这是一个非常典型的分割线。
```html
<dv-decoration-1 style="width:200px; height:50px;"/>
```

#### dv-decoration-2

这也是一个非常典型的分割线。
```html
<dv-decoration-2 style="width:200px; height:5px;" />
```
##### 配置
|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------------: | :--------: | :--------: | :----: | :----: |
|     dur      | 单次动画时长（秒） | `Number` |  `-`   |  `6`   |
|    reverse   | 是否旋转90°  | `Bool` | `true`, `false`| `false` |

dur这个属性可以设置时长，所以也可以用于展示一些已知时间的进度条。

reverse这个属性使用时同color一样，需要在属性前面加上`:`，当其值为`true`时，装饰将顺时针旋转90°。

#### dv-decoration-3

这是一个平平无奇的装饰。

```html
<dv-decoration-3 style="width:250px; height:30px;" />
```
它可以接收两种自定义颜色，在展示的时候产生渐变效果。

#### dv-decoration-4

这个装饰与dv-decoration-2很像，但在默认情况下，这个装饰是竖直的。

```html
<dv-decoration-4 style="width:5px; height:150px;" />
```

它可以接收两种自定义颜色。

##### 配置
|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------------: | :--------: | :--------: | :----: | :----: |
|     dur      | 单次动画时长（秒） | `Number` |  `-`   |  `3`   |
|    reverse   | 是否旋转90°  | `Bool` | `true`, `false`| `false` |
与dv-decoration-2一样，使用reverse属性时，需要在前面加上`:`，其值为`true`时，装饰为竖直样式。

#### dv-decoration-5
这是一个平平无奇的装饰。
```html
<dv-decoration-5 style="width:300px; height:40px;" />
```

它可以接收两种自定义颜色。

##### 配置
|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------------: | :--------: | :--------: | :----: | :----: |
|     dur      | 单次动画时长（秒） | `Number` |  `-`   |  `1.2`   |

#### dv-decoration-6

这是一个平平无奇的装饰。
```html
<dv-decoration-6 style="width:300px;height:30px;" />
```
它可以接收两种自定义颜色，展示的时候两种颜色交错。

### 小标题

#### dv-decoration-7

这是一个平平无奇的小标题。使用时将小标题内容放在标签中间。

```html
<dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>
```

在style属性中调整标题的文字大小颜色和字体。

它可以接收两种自定义颜色。




### 进度条

### 数据图及其装饰

## 胶囊柱图
## 飞线图
## 飞线图增强版
## 水位图