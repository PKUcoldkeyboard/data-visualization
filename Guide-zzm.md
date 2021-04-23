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
|     dur      | 单次动画时长（秒） | `Number` |  ---   |  `6`   |
|    reverse   | 是否旋转90°  | `Boolean` | `true`, `false`| `false` |

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
|     dur      | 单次动画时长（秒） | `Number` |  ---   |  `3`   |
|    reverse   | 是否旋转90°  | `Boolean` | `true`, `false`| `false` |
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
|     dur      | 单次动画时长（秒） | `Number` |  ---   |  `1.2`   |

#### dv-decoration-6

这是一个平平无奇的装饰。
```html
<dv-decoration-6 style="width:300px; height:30px;" />
```

它可以接收两种自定义颜色，展示的时候两种颜色交错。

#### dv-decoration-8

这是一个平平无奇的装饰，适用于表格的修饰。

```html
<dv-decoration-8 style="width:300px; height:50px;" />
```

它可以接收两种自定义颜色。

##### 配置

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------------: | :--------: | :--------: | :----: | :----: |
|    reverse   | 是否镜面翻转  | `Boolean` | `true`, `false`| `false` |

使用reverse属性时，需要在前面加上`:`符号，当该属性值为`true`时，装饰将镜面翻转。

#### dv-decoration-10

这是一个平平无奇的分割线。

```html
<dv-decoration-10 style="width:90%; height:5px;" />
```

它可以接收两种自定义颜色，第二个颜色作为底色，对于这个装饰，当背景为暗色时，底色应比前景色深，当背景为浅色时，底色应比前景色浅。


### 小标题

#### dv-decoration-7

这是一个平平无奇的小标题。使用时将小标题内容放在标签中间。

```html
<dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>
```

在style属性中调整标题的文字大小颜色和字体。

它可以接收两种自定义颜色。

#### dv-decoration-9

这是一个圆形的、科技感较强的小标题。如果你觉得它的样式对于小标题来说大了些，那么你可以用它来强调某一个数据或内容。

```html
<dv-decoration-9 style="width:150px;height:150px;">小标题</dv-decoration-9>
```

它可以接收两种自定义颜色，分别为两个旋转的圆框。

##### 配置

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------------: | :--------: | :--------: | :----: | :----: |
|    dur   | 单次动画时长（秒）  | `Number` | --- | `3` |

#### dv-decoration-11

这是一个看起来非常具有科技感的小标题——当且仅当你的颜色选择的非常合适！

```html
<dv-decoration-11 style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
```

它可以接收两种自定义颜色，第一个颜色为主色，第二个颜色为边框色。小标题字的颜色、大小、样式等可以在`style`属性中修改。

### 其他

#### dv-decoration-12

这是一个雷达图，但它没有特别大的实际用途。

```html
<dv-decoration-12 style="width:150px; height:150px;" />
```

##### 配置

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------------: | :--------: | :--------: | :----: | :----: |
|    scanDur   | 扫描动画时长（秒）  | `Number` | --- | `3` |
|    haloDur   | 光晕动画时长（秒）  | `Number` | --- | `2` |

它接收一种自定义颜色，作为背景圆盘的颜色，扫描的颜色默认不允许更改。

## 胶囊柱图

胶囊柱图，实际上就是一个好看的条形图。

```html
<dv-capsule-chart :config="config" style="width:300px; height:200px" />
```

其config属性书写如下：
```js
export default {
  data() { return {
      config: {
          data: [
            {
                name: '南阳',
                value: 167
            },
            {
                name: '周口',
                value: 67
            },
            {
                name: '漯河',
                value: 123
            },
            {
                name: '郑州',
                value: 55
            },
            {
                name: '西峡',
                value: 98
            }
          ]
      }
  }}
}
```

#### config属性

它也有其他config属性。

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------: | :--------: | :--------: | :----: | :----: |
|    data   | 柱数据  | `Array<Object>` | `<name, value>` | `[]` |
|    unit   | 单位  | `String` | --- | `''` |
| colors | 胶囊颜色 | `Array<String>` | `hex|rgb|rgba|关键字` | [1] |
| showValue | 是否显示数值 | `Boolean` | --- | `false` |

[1]**colors默认值**：`['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']`

#### data属性

对config属性中提到的`data`属性作一个详细说明。

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------: | :--------: | :--------: | :----: | :----: |
|    name   | 柱名称  | `String` | --- | `-` |
| value | 柱对应值 | `Number` | --- | `-` |

#### NOTE

在使用该方法时，`div`的`margin`属性不能设置为`'auto'`，否则会出现胶囊柱错位现象。可以调整元素`dv-capsule-charts`内部`padding`和`margin`等属性来设置您的图表位置。

## 飞线图

飞线图适用于在地图上表示流向的实例，例如航班的轨迹、人员流动等。

```html
<dv-flyline-chart :config="config" style="width:800px; height:800px;" />
```

#### dev模式

```html
<dv-flyline-chart :config="config" :dev="true" style="width:200px;height:100px;" />
```
设置dev模式为`true`即可，dev模式可以快速确定飞线点的位置。

使用方式：`f12`打开浏览器控制台，进入`console`，点击飞线图组件中想要设置的飞线点，控制台会输出该点的位置信息，其中`Click Position`是绝对坐标，`Relative Position`是相对坐标。
`dv-flyline-chart DEV:`
`Click Position is [377, 165]`
`Relative Position is [0.47, 0.21]`

#### config属性

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------: | :--------: | :--------: | :----: | :----: |
| centerPoint | 中心点坐标  | `Array<Number>` | --- | `[0, 0]` |
| points | 飞线起始点数据 | `Array` [1](#注释) | --- | `[]` |
| lineWidth | 飞线宽度 | `Number` | --- | `1`|
| orbitColor | 轨迹颜色 | `String` | --- | [2](#注释) |
| flylineColor | 飞线颜色 | `String` | --- | `'#ffde93'` |
| k | 飞线收束程度 [3](#注释) | `Number` | `[-1, 1]` | `-0.5` |
| curvature | 飞线曲率 [4](#注释) | `Number` | `[1, 10]` | `5` |
| flylineRadius | 飞线显示半径 [5](#注释) | `Number` | --- | `100` |
| duration | 飞线动画时长 | `Array<Number>` | `-` | `[20, 30]` [6](#注释) |
| relative | 使用相对坐标 | `Boolean` | `true, false` | `true` |
| bgImgUrl | 背景图url | `String` | --- | `''` |
| text | 文本配置项 | `Object` | --- | [文本](#text属性) |
| halo | 光晕环配置项 | `Object` | --- | [halo](#halo属性) |
| centerPointImg | 中心点图片配置 | `Object` | --- | [centerPointImg](#centerPointImg属性) |
| pointsImg | 飞线点图片配置 | `Object` | --- | [pointsImg](#pointsImg属性)

##### 注释

1. 飞线起始点数据子元素可以为数组或对象，数组为坐标，对象包含点坐标位置和文本信息。

2. 飞线轨迹颜色默认为`rgba(103, 224, 227, .2)`，如果想要隐藏轨迹线，可以设置`orbitColor`为`transparent`。

3. `k`决定了飞线的收束程度，当为负值时，飞线呈凸形聚合，为正值时，飞线呈凹形聚合。

4. `curvature`决定了飞线的弯曲程度，该值越小，飞线曲率越大，该值越大，飞线曲率越小。

5. `flylineRadius`控制了飞线的显示区域半径，该值越大，飞线显示范围越大，飞线越长，该值越小，飞线越短。

6. `duration`用于计算每一条飞线的动画时长（10 = 1s），`duration[0]`用于控制动画最短时长，`duration[1]`用于控制动画最长时长，飞线的动画时长将在此范围随机。如果想要每一条飞线的动画时长都相等可以将他们的值设为相同的。

7. `relative`用于控制是否启用相对坐标模式，默认启用相对坐标模式可以使得飞线点的位置按照飞线图组件宽高比计算，在飞线图宽高改变时，飞线点的位置也能够相对正确标识真实的物理位置。可以选取Dev模式下输出的点坐标信息。

#### text属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| offset | 文本位置偏移 | `Array<Number>` | --- | `[0, 15]` |
|color | 文本颜色 | `String` | --- | `#ffdb5c` |
| fontSize | 文本文字大小 | `Number` | --- | `12` |

#### halo属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| show | 是否显示光晕环 | `Boolean` | --- | `true`|
| duration | 动画时长 | `Number` | --- | `30` |
| color | 光晕颜色 | `String` | --- | `#fb7293` |
| radius | 光晕最大半径 | `Number` | --- | `120` |

#### centerPointImg属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| width | 图片宽度 | `Number` | --- | `40` |
| height | 图片高度 | `Number` | --- | `40` |
| url | 图片url | `String` | --- | `''` |

#### pointsImg属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| width | 图片宽度 | `Number` | --- | `15` |
| height | 图片高度 | `Number` | --- | `15` |
| url | 图片url | `String` | --- | `''` |

## 飞线图增强版

相对于飞线图来说，增强版将config配置进行了包装和完善，使得控制同一个元素的属性能够更紧密地贴合在一起。一般来说，飞线图增强版的应用要广于飞线图。

```html
<dv-flyline-chart-enhanced :config="config" style="width:800px; height:800px;" />
```

#### config属性

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------: | :--------: | :--------: | :----: | :----: |
| points | 飞线点 | `Point` | --- | `[]`[Point](#增强版Point属性) |
| line | 飞线 | `Flyline[]` | --- | `[]`[Flyline](#增强版Flyline属性) |
| halo | 全局光晕配置 | `Halo` | --- | [halo](#增强版halo属性) |
| text | 全局文本配置 | `Text` | --- | [text](#增强版text属性) |
| icon | 全局图标配置 | `Icon` | --- | [icon](#增强版icon属性) |
| line | 全局飞线配置 | `Line` | --- | `line` |
| bgImgSrc | 背景图src | `String` | --- | `''` |
| k | 飞线收束程度 [1](#注) | `Number` | `[-1, 1]` | `-0.5` |
| curvature | 飞线曲率 [2](#注) | `Number` | `[1, 10]` | `5` |
| relative | 使用相对坐标 [3](#注) | `Boolean` | `true, false` | `true` |

#### 增强版Point属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| name | 点名称 | `String` | --- | `-` |
| coordinate | 点坐标 | `Number[]` | --- | `-` |
| halo | 点光晕配置 | `Halo` | --- | [halo](#增强版halo属性)
| text | 点文本配置 | `Text` | --- | [text](#增强版text属性) |
| icon | 点图标配置 | `Icon` | --- | [icon](#增强版icon属性)

#### 增强版Flyline属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| source | 飞线起点的点名称 | `String` | --- | `-` |
| target | 飞线终点的点名称 | `String` | --- | `-` |
| width | 飞线宽度 | `Number` | --- | `inherit` |
| color | 飞线颜色 | `String` | --- | `inherit` |
| orbitColor | 飞线轨迹颜色 | `String` [4](#注) | --- | `inherit` |
| duration | 飞线动画时长 | `Number[]` [5](#注) | --- | `inherit` |
| radius | 飞线显示半径 | `Number` [6](#注) | --- | `inherit` |

#### 增强版halo属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| show | 是否显示光晕 | `Boolean` | --- | `false`|
| duration | 动画时长 | `Number[]` | --- | `[20, 30]` |
| color | 光晕颜色 | `String` | --- | `#fb7293` |
| radius | 光晕最大半径 | `Number` | --- | `120` |

#### 增强版text属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| show | 是否显示点名称 | `Boolean` | --- | `false` |
| offset | 名称位置偏移 | `Number[]` | --- | `[0, 15]` |
|color | 名称颜色 | `String` | --- | `#ffdb5c` |
| fontSize | 名称文字大小 | `Number` | --- | `12` |

#### 增强版icon属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| show | 是否显示点图标 | `Boolean` | --- | `false` |
| src | 图标src | `String` | --- | `''` |
| width | 图标宽度 | `Number` | --- | `15` |
| height |图标高度 | `Number` | --- | `15` |

#### 增强版line属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| width | 飞线宽度 | `Number` | --- | `1`|
| orbitColor | 轨迹颜色 | `String` | --- | `rgba(103, 224, 227, .2)` |
| color | 飞线颜色 | `String` | --- | `'#ffde93'` |
| duration | 飞线动画时长 | `Number[]` | --- | `[20, 30]` |
| radius | 飞线显示半径 | `Number` | --- | `100` |

##### 注

1. `k`决定了飞线的收束程度，当为负值时，飞线呈凸形聚合，为正值时，飞线呈凹形聚合。

2. `curvature`决定了飞线的弯曲程度，该值越小，飞线曲率越大，该值越大，飞线曲率越小。

3. `relative`用于控制是否启用相对坐标模式，默认启用相对坐标模式可以使得飞线点的位置按照飞线图组件宽高比计算，在飞线图宽高改变时，飞线点的位置也能够相对正确标识真实的物理位置。可以选取Dev模式下输出的点坐标信息。

4. 飞线轨迹颜色默认为`rgba(103, 224, 227, .2)`，如果想要隐藏轨迹线，可以设置`orbitColor`为`transparent`。

5. `duration`用于计算每一条飞线的动画时长（10 = 1s），`duration[0]`用于控制动画最短时长，`duration[1]`用于控制动画最长时长，飞线的动画时长将在此范围随机。如果想要每一条飞线的动画时长都相等可以将他们的值设为相同的。

6. `radius`控制了飞线的显示区域半径，该值越大，飞线显示范围越大，飞线越长；该值越小，飞线越短。

## 水位图

水位图有三种形态，多种配置，具体使用方法如下。

```html
<dv-water-level-pond :config="config" style="width:150px;height:200px" />
```

### 矩形水位图

这是水位图的默认形态。其`config`如下。

```js
export default {
  data: [66]
}
```

`data`表示水位位置，在水位图中默认显示出该值，并自动添加百分号。

### 圆角水位图

在矩形水位图的基础上增加了`config`的`shape`属性。

```js
export default {
  data: [66, 45],
  shape: 'roundRect'
}
```

`data`可以包含多个数值，会在水位图上显示不同的水面，但是数值仅显示最大值，且不能改变。

### 圆形水位图

`config`的`shape`属性改为`'round'`。

### `config`属性

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------: | :--------: | :--------: | :----: | :----: |
|    data   | 水位位置 (注1)  | `Array<Number>` | --- | `[]` |
| shape | 形状 | `String` | 三种形状 (注2) | `'rect'` |
| colors | 水位图配色 | `Array<String>` | `hex|rgb|rgba|关键字` | 渐变色 (注3) |
| waveNum | 波浪数量 | `Number` | --- | `3` |
| waveHeight | 波浪高度 | `Number` | --- | `40` |
| waveOpacity | 波浪透明度 | `Number` | --- | `0.4` |
| formatter | 信息格式化 | `String` | --- | `'{value}%'` (注4) |

注：
1. 可以有多个水位，但是默认显示值为最大值；
2. 矩形`rect`，圆角矩形`roundRect`，圆形`round`；
3. 默认配色为`['#00BAFF', '#3DE7C9']`，自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色；
4. 自动使用最大水位值替换`{value}`标记。