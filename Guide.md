# DataV教程

**小组成员：庞上智、伊力亚尔、周子淼**

[TOC]

## 1.DataV简介

DataV是一个基于Vue或React的组件库主要用于构建大屏（**全屏**）数据展示页面即**数据可视化**，具有多种类型组件可供使用（本教程使用的DataV是基于Vue的）：

- **边框**：带有不同边框的容器。

- **装饰**：用来点缀页面效果，增加视觉效果。

- **图表**：图表组件基于Charts封装，轻量，易用。

- **其他**：飞线图/水位图/轮播表等。

---

> * 注：DataV组件库的开发和调试都使用Chrome浏览器，没有做其他浏览器的兼容，尤其是IE，所以**请使用Chrome浏览器**。

## 2.DataV安装

### 2.1.npm环境配置

#### 2.1.1.下载最新版本的nodeJs

DataV组件库依赖Vue，要想使用它，创建一个Vue项目是必须的，而创建一个Vue项目首先要下安装Vue.js，并且为了方便构建项目，还需要引入脚手架工具vue-cli。它们可以通过npm或者yarn包管理工具进行安装，而本教程使用的是npm包管理工具。

npm包管理工具是nodeJs附带的，两者的关系就像pip与python一样，所以我们下载了nodeJs后，就可以使用npm。

本教程使用的nodeJs版本为12.14.1，所以为了能够正常复现可视化的流程，请确认系统内是否安装了版本新于12.14.1的nodeJs。可在命令行中输入"node -v"，查看nodeJs环境的配置情况。

如果之前没有安装nodeJs或版本较低，可从官网https://nodejs.org/en/下载LTS版本（长期稳定版）。

![image-20210424002821140](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424002821140.png)

**Windows用户**直接在首页下载，**Mac用户**请点击**DOWNLOADS**选择macOs Installer进行安装

![image-20210424003016338](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424003016338.png)

下载完成后，双击下载的安装包node-v14.16.1-x64.msi，进入安装界面，一路选择next即可（可以选择安装位置），最后点击Install，即可安装成功。

![image-20210424003318447](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424003318447.png)

![](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424003318447.png

![image-20210424003346425](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424003346425.png)

![image-20210424003357198](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424003357198.png)

![image-20210424003426227](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424003426227.png)

![image-20210424003433545](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424003433545.png)



安装完成后，可在命令行输入"node -v"，查看nodeJs环境配置情况。

![image-20210424003606256](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424003606256.png)

如图，我的nodeJs版本为12.14.1，而你下载的安装包版本应该为14.16.1

#### 2.1.2.配置镜像源

这一步主要是提高npm安装包的速度，因为可能有一些依赖包是国外的，下载速度会特别慢。

配置镜像源特别简单，只需在命令行输入

"npm config set registry=http://registry.npm.taobao.org"，即可设置好镜像源。

然后在命令行输入

"npm config get registry"，检查镜像站是否设置成功。

![image-20210424004035679](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424004035679.png)

> *注：我的镜像地址是华为云的，如果你是按照上面的命令设置镜像站，显示的内容则应该为
>
> http://registry.npm.taobao.org

### 2.2.Vue/Cli安装

有了npm后，这两者的安装就比较容易了。

只需在命令行中依次输入以下命令即可：

"npm i -g @vue/cli"

### 2.3.datav.js安装

前面说过，DataV组件库Vue，要想使用它，首先需要创建一个Vue项目。

所以我们选择一个想要存放代码的目录，在该目录下打开命令行，输入"vue create [项目名]"，将出现以下界面：

![image-20210424004825814](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424004825814.png)

直接回车就行，然后就能在文件目录中看到一个新建的文件夹，这就是刚刚创建的vue项目。

![image-20210424005031014](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424005031014.png)

创建项目完成后，在命令行输入"cd [项目名]"（如上图文件夹是datav-project，对应的就是cd datav-project），进入项目文件夹后，再输入"npm install @jiaminghi/data-view"，安装DataV

![image-20210424005425442](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424005425442.png)

到此为止，DataV的环境配置结束，现在只需在项目文件夹中点击"src"，打开main.js，加上以下两行代码就能在项目文件夹中使用DataV的可视化组件。

![image-20210424005749686](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424005749686.png)

> 注：DataV.js的安装是局部的，也就是说你只能在刚才输入了"npm install @jiaminghi/data-view"的项目中使用DataV组件，如果重新创建了一个新的Vue的项目，则需要重新在新的项目目录中打开命令行输入以上命令来引入DataV。



## 3.基本图表(Charts)

**Charts**是一个轻量级的简易图表，主要为[DataV大屏数据展示组件库](http://datav.jiaminghi.com/)提供图表支持，在该场景下不考虑图表交互，仅需展示效果，因此插件不提供交互及复杂功能。插件配置项参考**eCharts**，具有相关经验则极易上手使用。

提供的图表类型主要有：折线图、柱状图、饼状图、雷达图、仪表盘

在Vue文件中，这几种图的引入方式都一样，都是：

```vue
<dv-charts :option="option" />
```

只是这几个图传入的option配置变量不相同而已。

charts组件的配置项特别多，如下所示：

### 3.1.属性介绍

- color：color属性用来配置图表颜色，配置的颜色将自动覆盖默认配色，颜色支持`hex|rgb|rgba`，不支持如`'red'`等描述颜色。在option变量中配置方法如下：

  ```vue
  option:{
  	color:"#fff"
  }
  ```

- title：用来显示图表的标题，你可以配置该项来设置其位置和样式，大概按照以下方式配置：

  - show：是否显示标题
  - text：标题文本
  - offset：标题位置偏移
  - style：样式
  - rLevel：渲染级别

  ```vue
  option:{
  	title:{
  		show:true,
  		text:"标题文本",
  		offset:[0,-20],
  		style:{
  		  fill: '#333',
            fontSize: 17,
            fontWeight: 'bold',
            textAlign: 'center',
            textBaseline: 'bottom'
  		},
  		rLevel:20,
  	}
  }
  ```

- legend：为图表提供图例标签功能

  - show：是否显示
  - orient：图例标签方向，horizontal-垂直，vertical-水平
  - left：左边距
  - right：右边距
  - top：上边距
  - bottom：下边距
  - itemGap：标签间距
  - iconWidth：图例标签图标的宽度
  - iconHeight：图例标签图标的高度
  - ...

  ```vue
  option:{
  	legend:{
  		show:true,
  		orient:"horizontal",
  		...
  	}
  }
  ```

- 还有很多属性，这里不一一列举，为了快速上手，我们接下来从基本图表的制作入手。

### 3.2.基本图表制作

#### 3.2.1.折线图

- 基本配置项如下：

  ```vue
  option1: {
                  title: {
                      text: '周销售额趋势'
                  },
                  xAxis: {
                      name: '第一周',
                      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                  },
                  yAxis: {
                      name: '销售额',
                      data: 'value'
                  },
                  series: [{
                      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                      type: 'line'
                  }]
              }
  ```

- 关键属性是：series.type，需要设置为'line'，表示为折线图，data项按照上面来填写就行，比较容易理解。

- 光滑折线图：设置series.smooth为true

- 虚线折线图：设置series.lineStyle的lineDash属性，比如

  ```
  series:[{
  	lineStyle:{
  		lineDash:[10,10]
  	}
  }]
  ```

- 填充折线图：设置series.lineArea.show为true，比如

  ```
  series:[{
  	lineArea:{
  		show:true
  	}
  }]
  ```

- 渐变填充图，在填充折线图的基础上添加渐变颜色范围gradient，比如

  ```
  series:[{
  	lineArea:{
  		show:true,
  		gradient:['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
  	}
  }]
  ```

- 显示折线点上数值：设置series.label.show为true，如果有格式需求，比如xx元，可以添加一个formatter

  ```
  series: [
      {
        label: {
          show: true,
          formatter: '{value} 元'
        }
      }
    ]
  ```

- 折线点的半径：设置series.linePoint.radius

  ```
   series: [
      {
        linePoint: {
          radius: 4
        }
      }
    ]
  ```

#### 3.2.2.柱状图

- 基本配置项如下：

  ```vue
  option2: {
                  title: {
                      text: '周销售额趋势'
                  },
                  xAxis: {
                      name: '第一周',
                      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                  },
                  yAxis: {
                      name: '销售额',
                      data: 'value'
                  },
                  series: [{
                      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                      type: 'bar'
                  }]
              }
  ```

- 关键属性是：series.type，需要设置为'bar'，表示为柱状图，data项按照上面来填写就行，比较容易理解。

- 梯形柱状图：设置series.shapeType为“leftEchelon”或“rightEchelon”

  ```
  series:[{
  	shapeType:'leftEchelon'
  }]
  ```

- 渐变柱状图：和渐变折线图设置方法一样

- 同组柱状图：设置series.stack为相同的值即可

  ```
  series: [
      {
        name: '系列A',
        data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
        type: 'bar',
        stack: 'a'
      },
      {
        name: '系列B',
        data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
        type: 'bar',
        stack: 'a'
      }
    ]
  ```

  表示data1：[1200, 2230, 1900, 2100, 3500, 4200, 3985]，和data2：[1200, 2230, 1900, 2100, 3500, 4200, 3985]被分到同一个组“a”中。

- 横向柱状图：将xAxis改成yAxis，yAxis改成xAxis即可。

#### 3.3.3.饼状图

- 基本配置项如下：

  ```
  option3: {
                  title: {
                      text: '畅销饮料占比饼状图'
                  },
                  series: [{
                      type: 'pie',
                      data: [
                          { name: '可口可乐', value: 93 },
                          { name: '百事可乐', value: 32 },
                          { name: '哇哈哈', value: 65 },
                          { name: '康师傅', value: 44 },
                          { name: '统一', value: 52 },
                      ]
                  }]
              }
  ```

- 关键配置属性为：series.type，设置为"pie"，表示为饼状图

- 玫瑰饼状图：设置series.roseType为true

  ```
  series:[{
  	roseType:true
  }]
  ```

- 环形饼状图：设置series.radius，即圆的半径范围，比如

  ```
  series:[{
  	radius:['40%','50%']
  }]
  ```

#### 3.3.4.雷达图

- 基本配置项如下：

  ```
  option4: {
                  radar: {
                      indicator: [
                          { name: '西峡', max: 300 },
                          { name: '周口', max: 300 },
                          { name: '南阳', max: 300 },
                          { name: '驻马店', max: 300 },
                          { name: '郑州', max: 300 },
                          { name: '洛阳', max: 300 }
                      ]
                  },
                  series: [{
                      type: 'radar',
                      data: [111, 256, 178, 152, 266, 132]
                  }]
              }
  ```

- 关键配置属性为：series.type，设置为"radar"，表示为雷达图，以及radar.indicator，设置轴的名称和最大值。

#### 3.3.5.仪表盘

- 基本配置如下：

  ```
  option5: {
                  title: {
                      text: '剩余油量表'
                  },
                  series: [{
                      type: 'gauge',
                      data: [{ name: 'itemA', value: 55 }],
                      axisLabel: {
                          formatter: '{value}%'
                      },
                  }]
              }
  ```

- 关键配置属性为：series.type，设置为"gauge"，表示为仪表盘，axisLabel表示刻度，formatter将值给格式化。

- 详情仪表盘，设置series.details.show为true，具体如下

  ```
  series:[{
  	details:{
  		show:true
  	}
  }]
  
  ```

## 4.进阶图表与细节装饰

### 4.1.Loading

Loading图是在数据尚未加载完成时显示Loading的效果，增强用户体验。

展示为一个旋转的Loading图片

![image-20210425183047086](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210425183047086.png)

使用实例：

```vue
<dv-loading>Loading...</dv-loading>
```

补充说明：该图没有额外的属性设置







### 4.2.边框

边框是较为基础的组件，但是使用恰当可以使我们的可视化页面更为美观。

示例：(展示了十种不同的边框样式)

```html
<dv-border-box-1></dv-border-box-1><br/>
<dv-border-box-2></dv-border-box-2><br/>
<dv-border-box-3></dv-border-box-3><br/>
<dv-border-box-4></dv-border-box-4><br/>
<dv-border-box-5></dv-border-box-5><br/>
<dv-border-box-8></dv-border-box-8><br/>
<dv-border-box-9></dv-border-box-9><br/>
<dv-border-box-10></dv-border-box-10><br/>
```

以上是十种不同的边框，具体效果可以看演示

#### 4.2.1.config 属性

所有边框均支持自定义颜色及背景色，相关配置的属性信息如下：

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------------: | :--------: | :--------: | :----: | :----: |
|      color      | 自定义颜色 | `string[]` |  `-`   |  `-`   |
| backgroundColor |   背景色   |  `string`  |  `-`   |  `-`   |

示例：

```html
<dv-border-box-1 :color="['red', 'blue']" backgroundColor="white" >dv-border-box-1</dv-border-box-1>
```

当然这个示例中的颜色是非常不可取的~

> `color`属性支持配置两个颜色，一主一副。
>
> 颜色类型可以为颜色关键字、十六进制色、RGB及RGBA。



有一些边框支持 `dur` 属性，即单词动画时长：

| 属性 |       说明       |   类型   | 可选值 | 默认值 |
| :--: | :--------------: | :------: | :----: | :----: |
| dur  | 单次动画时长(秒) | `Number` |  `-`   |  `3`   |



另外`dv-border-box-11`边框支持在边框上部写入 title

示例：

```html
<dv-border-box-11 title="this is the title">dv-border-box-11</dv-border-box-11>
```

|    属性    |   说明   |   类型   | 可选值 | 默认值 |
| :--------: | :------: | :------: | :----: | :----: |
|   title    | 边框标题 | `String` |  `-`   |  `''`  |
| titleWidth | 标题宽度 | `Number` |  `-`   | `250`  |





### 4.3.动态环图

动态环图是一种扇形图，可以用来可视化数据中各成分的占比和数值

特点是循环放大展示某一部分的具体信息，突出显示更有重点

示例：

```html
<dv-active-ring-chart :config="config" style="width:300px;height:300px" />
```

其 config 数据如下：

```js
export default{
  data(){return { 
  config:{data:[
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    }
  ],
  digitalFlopStyle: {
    fontSize: 20
  }   
  }
  }
  }
  }
```



**可以在config中调整各个属性**

#### 4.3.1.config属性

|        属性        |        说明        |      类型       |                            可选值                            |      默认值      |
| :----------------: | :----------------: | :-------------: | :----------------------------------------------------------: | :--------------: |
|       radius       |       环半径       | `String|Number` |                         `'50%'|100`                          |     `'50%'`      |
|    activeRadius    |   环半径（动态）   | `String|Number` |                         `'55%'|110`                          |     `'55%'`      |
|        data        |       环数据       | `Array<Object>` | [data属性](http://datav.jiaminghi.com/guide/activeRingChart.html#data属性) |       `[]`       |
|     lineWidth      |     环线条宽度     |    `Number`     |                             ---                              |       `20`       |
|   activeTimeGap    |    切换间隔(ms)    |    `Number`     |                             ---                              |      `3000`      |
|       color        |       环颜色       | `Array<String>` |                             [1]                              |       `[]`       |
|  digitalFlopStyle  |   数字翻牌器样式   |    `Object`     |                             ---                              |       [2]        |
| digitalFlopToFixed | 数字翻牌器小数位数 |    `Number`     |                             ---                              |       `0`        |
|  digitalFlopUnit   |   数字翻牌器单位   |    `String`     |                             ---                              |       `''`       |
|   animationCurve   |      动效曲线      |    `String`     |  [Transition](http://transition.jiaminghi.com/curveTable/)   | `'easeOutCubic'` |
|   animationFrame   |      动效帧数      |    `Number`     |                             [3]                              |       `50`       |
|  showOriginValue   |     显示原始值     |    `Boolean`    |                             ---                              |     `false`      |

#### 4.3.2.data属性

| 属性  |    说明    |   类型   | 可选值 | 默认值 |
| :---: | :--------: | :------: | :----: | :----: |
| name  | 环对应名称 | `String` |  ---   |  ---   |
| value |  环对应值  | `Number` |  ---   |  ---   |





### 4.4.进度池

进度池可以用来展示某一进程的当前进度情况，datav中也提供了非常美观的组件

示例：

```html
<dv-percent-pond :config="config" style="width:200px;height:100px;" />
```

其config数据：

```js
export default{
  data(){return {
  config:{
  colors: ['#01c4f9', '#c135ff'],
  value: 88,
  localGradient: true
  }
  }}
  }
```

通过config的属性，我们可以调节多项内容，包括边框、线条缝隙、局部渐变、颜色等

#### 4.4.1.config属性

|     属性      |    说明    |      类型       | 可选值  |     默认值      |
| :-----------: | :--------: | :-------------: | :-----: | :-------------: |
|     value     | 进度池数值 |    `Number`     | `0-100` |       `0`       |
|    colors     | 进度池配色 | `Array<String>` |   [1]   |       [2]       |
|  borderWidth  |  边框宽度  |    `Number`     |   ---   |       `3`       |
|   borderGap   |  边框间隙  |    `Number`     |   ---   |       `3`       |
|   lineDash    |  线条间隙  | `Array<Number>` |   ---   |    `[5, 1]`     |
|   textColor   |  文字颜色  |    `String`     |   [1]   |     `#fff`      |
| borderRadius  |  边框半径  |    `Number`     |   ---   |       `5`       |
| localGradient |  局部渐变  |    `Boolean`    |   ---   |     `false`     |
|   formatter   | 信息格式化 |    `String`     |   ---   | `'{value}%'`[3] |





### 4.5.锥形柱图

锥形柱图是特殊的，更为生动的柱状图，他将根据数值大小，降序排列锥形柱，并且可以选择加入图片，适合排名类数据展示。

示例：

```html
<dv-conical-column-chart :config="config" style="width:400px;height:200px;" />
```

config数据：

```
export default{
  data(){return{
  config:{
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 71
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 35
    },
    {
      name: '漯河',
      value: 15
    }
  ],
  img: [
    'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
  ],
  showValue: true,
  fontSize:20
  }
  }}
  }
```

我们同样还是可以用config的属性来调节可视化，上述例子中我们规定了显示具体值，并且给出了小图标的超链接，同时规定了字体大小

#### 4.5.1.config属性

|     属性      |    说明     |      类型       |                            可选值                            |           默认值           |
| :-----------: | :---------: | :-------------: | :----------------------------------------------------------: | :------------------------: |
|     data      |   柱数据    | `Array<Object>` | [data属性](http://datav.jiaminghi.com/guide/conicalColumnChart.html#data属性) |            `[]`            |
|      img      | 柱顶图片url | `Array<String>` |                             ---                              |            `[]`            |
|   fontSize    |  文字大小   |    `Number`     |                             ---                              |            `12`            |
| imgSideLength |  图片边长   |    `Number`     |                             ---                              |            `30`            |
|  columnColor  |   柱颜色    |    `String`     |                             ---                              | `'rgba(0, 194, 255, 0.4)'` |
|   textColor   |  文字颜色   |    `String`     |                             ---                              |          `'#fff'`          |
|   showValue   |  显示数值   |    `Boolean`    |                             ---                              |          `false`           |

#### 4.5.2data属性

| 属性  |  说明  |   类型   | 可选值 | 默认值 |
| :---: | :----: | :------: | :----: | :----: |
| name  | 柱名称 | `String` |  ---   |  ---   |
| value | 柱数值 | `Number` |  ---   |  ---   |





### 4.6.数字翻牌器

数字翻牌器可用于数字展示的美化，可以更连续的反映数字变化

示例：

```html
<div>
  	<div class="button" @click="changeConfig"><p>切换数据</p></div>
    <br><br>
    <dv-digital-flop :config="config" style="width:150px;height:75px;" />
  </div>
```

config数据如下：

```js
export default {
  data() {
        return {
            config: {
                number: [100],
                content: '{nt}个'
            },
            first: true,
            second: false,
            third:false
        }
    },
    methods: {
        changeConfig() {
            if (this.first) {
                this.config = {
                    number: [555],
                    content: '{nt}个'
                };
                this.first = false;
                this.second = true
            } else if(this.second){
                this.config = {
                    number: [100],
                    content: '{nt}个'
                };
                this.second = false;
                this.third = true
            }
            else if(this.third){
                this.config = {
                    number: [999],
                    content: '{nt}个'
                };
                this.third = false;
                this.first = true
            }
        }
    }
}

```



其中，同样可以通过修改config的属性来做出若干变化，包括生成浮点数，多数值展示，或者加上千位分隔符等

#### 4.6.1.config属性

|      属性      |     说明     |      类型       |                            可选值                            |      默认值      |
| :------------: | :----------: | :-------------: | :----------------------------------------------------------: | :--------------: |
|     number     | 数字数值[1]  | `Array<Number>` |                             ---                              |       `[]`       |
|    content     | 内容模版[1]  |    `String`     |                             ---                              |       `''`       |
|    toFixed     |   小数位数   |    `Number`     |                             ---                              |       `0`        |
|   textAlign    | 水平对齐方式 |    `String`     |                             [2]                              |    `'center'`    |
|     rowGap     |    行间距    |    `Number`     |                             [3]                              |       `0`        |
|     style      |   样式配置   |    `Object`     | [CRender Style](http://crender.jiaminghi.com/guide/style.html) |       [4]        |
|   formatter    |  格式化数字  |   `Function`    |                             [5]                              |   `undefined`    |
| animationCurve |   动效曲线   |    `String`     |  [Transition](http://transition.jiaminghi.com/curveTable/)   | `'easeOutCubic'` |
| animationFrame |   动效帧数   |    `Number`     |                             [6]                              |       `50`       |

 `number`中的元素将被用于替换`content`内容模版中的`{nt}`标记，其替换顺序与模版标记的顺序一一对应：

```js
const number = [1, 2, 3, 4]
const content = '数字{nt},数字{nt},数字{nt},数字{nt}'
// 实际显示效果：'数字1,数字2,数字3,数字4'
```





### 4.7.轮播表

轮播表是一种十分有效的展示信息的方式，可以在有限的窗口内滚动展示大量的信息

示例：

```html
<dv-scroll-board :config="config" style="width:600px;height:300px" />
```

config数据如下：

```js
export default{
  data(){return {
  config2:{
  header: ['航班号', '出发', '到达'],
  data: [
    ['CZ6902', '北京', '长沙'],
    ['CZ2090', '上海', '成都'],
    ['CA3948', '乌鲁木齐', '北京'],
    ['CA5435', '成都', '北京'],
    ['CZ5642', '长沙', '贵州'],
    ['MU8547', '北京', '乌鲁木齐'],
    ['MU3757', '贵州', '成都'],
    ['CA5946', '上海', '北京'],
    ['CZ2847', '辽宁', '成都'],
    ['MU5836', '乌鲁木齐', '上海']
  ],
  index: true,
  columnWidth: [50],
  align: ['center']
  }
  }}
  }
```



同样可以通过选择config的属性，来选择是否有列名，是否展示行号，是否整页轮播等

#### 4.7.1.config属性

|     属性     |       说明       |      类型       |      可选值       |   默认值    |
| :----------: | :--------------: | :-------------: | :---------------: | :---------: |
|    header    |     表头数据     | `Array<String>` |        ---        |    `[]`     |
|     data     |      表数据      | `Array<Array>`  |        ---        |    `[]`     |
|    rowNum    |      表行数      |    `Number`     |        ---        |     `5`     |
|  headerBGC   |    表头背景色    |    `String`     |        ---        | `'#00BAFF'` |
|  oddRowBGC   |   奇数行背景色   |    `String`     |        ---        | `'#003B51'` |
|  evenRowBGC  |   偶数行背景色   |    `String`     |        ---        |  `#0A2732`  |
|   waitTime   | 轮播时间间隔(ms) |    `Number`     |        ---        |   `2000`    |
| headerHeight |     表头高度     |    `Number`     |        ---        |    `35`     |
| columnWidth  |      列宽度      | `Array<Number>` |        [1]        |    `[]`     |
|    align     |    列对齐方式    | `Array<String>` |        [2]        |    `[]`     |
|    index     |     显示行号     |    `Boolean`    |   `true|false`    |   `false`   |
| indexHeader  |     行号表头     |    `String`     |        `-`        |    `'#'`    |
|   carousel   |     轮播方式     |    `String`     | `'single'|'page'` | `'single'`  |
|  hoverPause  |   悬浮暂停轮播   |    `Boolean`    |        ---        |   `true`    |



对于轮播表，支持一些操作，比如当点击某个单元格或者鼠标悬停在某个单元格上时，执行特定的某种操作。

#### 4.7.2.click事件

当单元格被点击时（表头不支持），轮播表将抛出一个`click`事件，包含被点击的单元格的相关数据

#### 4.7.3.mouseover事件

当鼠标悬浮在某个单元格上时（表头不支持），轮播表将抛出一个`mouseover`事件，包含被悬浮单元格的相关数据

#### 4.7.4.click & mouseover 事件数据属性

|    属性     |    说明    |      类型       | 可选值 | 默认值 |
| :---------: | :--------: | :-------------: | :----: | :----: |
|     row     | 所在行数据 | `Array<String>` |  ---   |  ---   |
|    ceil     | 单元格数据 | `Array<Array>`  |  ---   |  `[]`  |
|  rowIndex   |   行索引   |    `Number`     |  ---   |  ---   |
| columnIndex |   列索引   |    `Number`     |  ---   |  ---   |





### 4.8.排名轮播表

排名轮播表与轮播表类似，有很多相似的属性，可以在有限的窗口大小滚动展示信息。

不同点是，排名轮播表会将传入的数据进行排序，再予以展示。

示例：

```html
<dv-scroll-ranking-board :config="config1" style="width:600px;height:300px" />
```

config数据如下：

```js
export default{
  data(){return {
  config1:{
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 45
    },
    {
      name: '漯河',
      value: 29
    }
  ]
  }
  }
  }
  }
```



config和config中的data属性如下：

#### 4.8.1.config属性

|      属性      |       说明       |      类型       |                            可选值                            |   默认值    |
| :------------: | :--------------: | :-------------: | :----------------------------------------------------------: | :---------: |
|      data      |      表数据      | `Array<Object>` | [data属性](http://datav.jiaminghi.com/guide/scrollRankingBoard.html#data属性) |    `[]`     |
|     rowNum     |      表行数      |    `Number`     |                             ---                              |     `5`     |
|    waitTime    | 轮播时间间隔(ms) |    `Number`     |                             ---                              |   `2000`    |
|    carousel    |     轮播方式     |    `String`     |                      `'single'|'page'`                       | `'single'`  |
|      unit      |     数值单位     |    `String`     |                             ---                              |    `''`     |
|      sort      |     自动排序     |    `Boolean`    |                             ---                              |   `true`    |
| valueFormatter |    数值格式化    |   `Function`    |                             ---                              | `undefined` |

#### 4.8.2data属性

| 属性  | 说明 |   类型   | 可选值 | 默认值 |
| :---: | :--: | :------: | :----: | :----: |
| name  | 名称 | `String` |  ---   |  ---   |
| value | 数值 | `Number` |  ---   |  ---   |



对于轮播表中的数值进行格式化的valueFormatter函数的参数如下：

#### 4.8.3valueFormatter参数属性

|  属性   |  说明  |   类型   | 可选值 | 默认值 |
| :-----: | :----: | :------: | :----: | :----: |
|  name   |  名称  | `String` |  ---   |  ---   |
|  value  |  数值  | `Number` |  ---   |  ---   |
| percent | 百分比 | `Number` |  ---   |  ---   |
| ranking |  排名  | `Number` |  ---   |  ---   |



### 4.9.全屏容器

全屏容器会根据浏览器当前页面的大小和比例自动对网页进行缩放，使得容器充满屏幕。

注意

1. 建议在全屏容器内使用百分比flex进行布局
2. 使用前将body的margin设置为0，否则会出现全屏容器无法全屏的现象

### 4.10.装饰

根据datav所提供的装饰样式，我们根据其适合的场景将其分为几个大类。

**TIP** 所有装饰均支持自定义颜色，使用方法如下

```html
<dv-decoration-1 :color="['#ffff80', '#ff80ff']" />
```

注意color前面必须有`:`符号，而其他属性例如style则不需要`:`符号。

color属性接受string类型取值，支持一主一副两个配色，主色在前，副色在后。颜色类型可以为关键字、十六进制、RGB和RGBA。

### 4.11.分割线及图表装饰

#### 4.11.1.dv-decoration-1

这是一个非常典型的分割线。

```html
<dv-decoration-1 style="width:200px; height:50px;"/>
```

#### 4.11.2.dv-decoration-2

这也是一个非常典型的分割线。

```html
<dv-decoration-2 style="width:200px; height:5px;" />
```

##### 配置

|  属性   |        说明        |   类型    |     可选值      | 默认值  |
| :-----: | :----------------: | :-------: | :-------------: | :-----: |
|   dur   | 单次动画时长（秒） | `Number`  |       ---       |   `6`   |
| reverse |    是否旋转90°     | `Boolean` | `true`, `false` | `false` |

dur这个属性可以设置时长，所以也可以用于展示一些已知时间的进度条。

reverse这个属性使用时同color一样，需要在属性前面加上`:`，当其值为`true`时，装饰将顺时针旋转90°。

#### 4.11.3.dv-decoration-3

这是一个平平无奇的装饰。

```html
<dv-decoration-3 style="width:250px; height:30px;" />
```

它可以接收两种自定义颜色，在展示的时候产生渐变效果。

#### 4.11.4.dv-decoration-4

这个装饰与dv-decoration-2很像，但在默认情况下，这个装饰是竖直的。

```html
<dv-decoration-4 style="width:5px; height:150px;" />
```

它可以接收两种自定义颜色。

##### 配置

|  属性   |        说明        |   类型    |     可选值      | 默认值  |
| :-----: | :----------------: | :-------: | :-------------: | :-----: |
|   dur   | 单次动画时长（秒） | `Number`  |       ---       |   `3`   |
| reverse |    是否旋转90°     | `Boolean` | `true`, `false` | `false` |

与dv-decoration-2一样，使用reverse属性时，需要在前面加上`:`，其值为`true`时，装饰为竖直样式。

#### 4.11.5.dv-decoration-5

这是一个平平无奇的装饰。

```html
<dv-decoration-5 style="width:300px; height:40px;" />
```

它可以接收两种自定义颜色。

##### 配置

| 属性 |        说明        |   类型   | 可选值 | 默认值 |
| :--: | :----------------: | :------: | :----: | :----: |
| dur  | 单次动画时长（秒） | `Number` |  ---   | `1.2`  |

#### 4.11.6.dv-decoration-6

这是一个平平无奇的装饰。

```html
<dv-decoration-6 style="width:300px; height:30px;" />
```

它可以接收两种自定义颜色，展示的时候两种颜色交错。

#### 4.11.7.dv-decoration-8

这是一个平平无奇的装饰，适用于表格的修饰。

```html
<dv-decoration-8 style="width:300px; height:50px;" />
```

它可以接收两种自定义颜色。

##### 配置

|  属性   |     说明     |   类型    |     可选值      | 默认值  |
| :-----: | :----------: | :-------: | :-------------: | :-----: |
| reverse | 是否镜面翻转 | `Boolean` | `true`, `false` | `false` |

使用reverse属性时，需要在前面加上`:`符号，当该属性值为`true`时，装饰将镜面翻转。

#### 4.11.8.dv-decoration-10

这是一个平平无奇的分割线。

```html
<dv-decoration-10 style="width:90%; height:5px;" />
```

它可以接收两种自定义颜色，第二个颜色作为底色，对于这个装饰，当背景为暗色时，底色应比前景色深，当背景为浅色时，底色应比前景色浅。

### 4.12.小标题型图标装饰

#### 4.12.1.dv-decoration-7

这是一个平平无奇的小标题。使用时将小标题内容放在标签中间。

```html
<dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>
```

在style属性中调整标题的文字大小颜色和字体。

它可以接收两种自定义颜色。

#### 4.12.2.dv-decoration-9

这是一个圆形的、科技感较强的小标题。如果你觉得它的样式对于小标题来说大了些，那么你可以用它来强调某一个数据或内容。

```html
<dv-decoration-9 style="width:150px;height:150px;">小标题</dv-decoration-9>
```

它可以接收两种自定义颜色，分别为两个旋转的圆框。

##### 配置

| 属性 |        说明        |   类型   | 可选值 | 默认值 |
| :--: | :----------------: | :------: | :----: | :----: |
| dur  | 单次动画时长（秒） | `Number` |  ---   |  `3`   |

#### 4.12.3.dv-decoration-11

这是一个看起来非常具有科技感的小标题——当且仅当你的颜色选择的非常合适！

```html
<dv-decoration-11 style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
```

它可以接收两种自定义颜色，第一个颜色为主色，第二个颜色为边框色。小标题字的颜色、大小、样式等可以在`style`属性中修改。

#### 4.12.4.dv-decoration-12

这是一个雷达图，但它没有特别大的实际用途。

```html
<dv-decoration-12 style="width:150px; height:150px;" />
```

##### 配置

|  属性   |        说明        |   类型   | 可选值 | 默认值 |
| :-----: | :----------------: | :------: | :----: | :----: |
| scanDur | 扫描动画时长（秒） | `Number` |  ---   |  `3`   |
| haloDur | 光晕动画时长（秒） | `Number` |  ---   |  `2`   |

它接收一种自定义颜色，作为背景圆盘的颜色，扫描的颜色默认不允许更改。

### 4.13.胶囊柱图

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

#### 4.13.1config属性

它也有其他config属性。

|   属性    |     说明     |      类型       |        可选值         | 默认值  |
| :-------: | :----------: | :-------------: | :-------------------: | :-----: |
|   data    |    柱数据    | `Array<Object>` |    `<name, value>`    |  `[]`   |
|   unit    |     单位     |    `String`     |          ---          |  `''`   |
|  colors   |   胶囊颜色   | `Array<String>` | `hex|rgb|rgba|关键字` |   [1]   |
| showValue | 是否显示数值 |    `Boolean`    |          ---          | `false` |

[1]**colors默认值**：`['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']`

#### 4.13.2.data属性

对config属性中提到的`data`属性作一个详细说明。

| 属性  |   说明   |   类型   | 可选值 | 默认值 |
| :---: | :------: | :------: | :----: | :----: |
| name  |  柱名称  | `String` |  ---   |  `-`   |
| value | 柱对应值 | `Number` |  ---   |  `-`   |

#### 4.13.3.NOTE

在使用该方法时，`div`的`margin`属性不能设置为`'auto'`，否则会出现胶囊柱错位现象。可以调整元素`dv-capsule-charts`内部`padding`和`margin`等属性来设置您的图表位置。

### 4.14.飞线图

飞线图适用于在地图上表示流向的实例，例如航班的轨迹、人员流动等。

```html
<dv-flyline-chart :config="config" style="width:800px; height:800px;" />
```

#### 4.14.1.dev模式

```html
<dv-flyline-chart :config="config" :dev="true" style="width:200px;height:100px;" />
```

设置dev模式为`true`即可，dev模式可以快速确定飞线点的位置。

使用方式：`f12`打开浏览器控制台，进入`console`，点击飞线图组件中想要设置的飞线点，控制台会输出该点的位置信息，其中`Click Position`是绝对坐标，`Relative Position`是相对坐标。
`dv-flyline-chart DEV:`
`Click Position is [377, 165]`
`Relative Position is [0.47, 0.21]`

#### 4.14.2.config属性

|      属性      |          说明           |        类型        |    可选值     |                默认值                 |
| :------------: | :---------------------: | :----------------: | :-----------: | :-----------------------------------: |
|  centerPoint   |       中心点坐标        |  `Array<Number>`   |      ---      |               `[0, 0]`                |
|     points     |     飞线起始点数据      | `Array` [1](#注释) |      ---      |                 `[]`                  |
|   lineWidth    |        飞线宽度         |      `Number`      |      ---      |                  `1`                  |
|   orbitColor   |        轨迹颜色         |      `String`      |      ---      |              [2](#注释)               |
|  flylineColor  |        飞线颜色         |      `String`      |      ---      |              `'#ffde93'`              |
|       k        | 飞线收束程度 [3](#注释) |      `Number`      |   `[-1, 1]`   |                `-0.5`                 |
|   curvature    |   飞线曲率 [4](#注释)   |      `Number`      |   `[1, 10]`   |                  `5`                  |
| flylineRadius  | 飞线显示半径 [5](#注释) |      `Number`      |      ---      |                 `100`                 |
|    duration    |      飞线动画时长       |  `Array<Number>`   |      `-`      |         `[20, 30]` [6](#注释)         |
|    relative    |      使用相对坐标       |     `Boolean`      | `true, false` |                `true`                 |
|    bgImgUrl    |        背景图url        |      `String`      |      ---      |                 `''`                  |
|      text      |       文本配置项        |      `Object`      |      ---      |           [文本](#text属性)           |
|      halo      |      光晕环配置项       |      `Object`      |      ---      |           [halo](#halo属性)           |
| centerPointImg |     中心点图片配置      |      `Object`      |      ---      | [centerPointImg](#centerPointImg属性) |

| pointsImg | 飞线点图片配置 | `Object` | --- | [pointsImg](#pointsImg属性)

##### 注释

1. 飞线起始点数据子元素可以为数组或对象，数组为坐标，对象包含点坐标位置和文本信息。

2. 飞线轨迹颜色默认为`rgba(103, 224, 227, .2)`，如果想要隐藏轨迹线，可以设置`orbitColor`为`transparent`。

3. `k`决定了飞线的收束程度，当为负值时，飞线呈凸形聚合，为正值时，飞线呈凹形聚合。

4. `curvature`决定了飞线的弯曲程度，该值越小，飞线曲率越大，该值越大，飞线曲率越小。

5. `flylineRadius`控制了飞线的显示区域半径，该值越大，飞线显示范围越大，飞线越长，该值越小，飞线越短。

6. `duration`用于计算每一条飞线的动画时长（10 = 1s），`duration[0]`用于控制动画最短时长，`duration[1]`用于控制动画最长时长，飞线的动画时长将在此范围随机。如果想要每一条飞线的动画时长都相等可以将他们的值设为相同的。

7. `relative`用于控制是否启用相对坐标模式，默认启用相对坐标模式可以使得飞线点的位置按照飞线图组件宽高比计算，在飞线图宽高改变时，飞线点的位置也能够相对正确标识真实的物理位置。可以选取Dev模式下输出的点坐标信息。

#### 4.14.3.text属性

|   属性   |     说明     |      类型       | 可选值 |  默认值   |
| :------: | :----------: | :-------------: | :----: | :-------: |
|  offset  | 文本位置偏移 | `Array<Number>` |  ---   | `[0, 15]` |
|  color   |   文本颜色   |    `String`     |  ---   | `#ffdb5c` |
| fontSize | 文本文字大小 |    `Number`     |  ---   |   `12`    |

#### 4.14.4.halo属性

|   属性   |      说明      |   类型    | 可选值 |  默认值   |
| :------: | :------------: | :-------: | :----: | :-------: |
|   show   | 是否显示光晕环 | `Boolean` |  ---   |  `true`   |
| duration |    动画时长    | `Number`  |  ---   |   `30`    |
|  color   |    光晕颜色    | `String`  |  ---   | `#fb7293` |
|  radius  |  光晕最大半径  | `Number`  |  ---   |   `120`   |

#### 4.14.5.centerPointImg属性

|  属性  |   说明   |   类型   | 可选值 | 默认值 |
| :----: | :------: | :------: | :----: | :----: |
| width  | 图片宽度 | `Number` |  ---   |  `40`  |
| height | 图片高度 | `Number` |  ---   |  `40`  |
|  url   | 图片url  | `String` |  ---   |  `''`  |

#### 4.14.6.pointsImg属性

|  属性  |   说明   |   类型   | 可选值 | 默认值 |
| :----: | :------: | :------: | :----: | :----: |
| width  | 图片宽度 | `Number` |  ---   |  `15`  |
| height | 图片高度 | `Number` |  ---   |  `15`  |
|  url   | 图片url  | `String` |  ---   |  `''`  |

### 4.15.飞线图增强版

相对于飞线图来说，增强版将config配置进行了包装和完善，使得控制同一个元素的属性能够更紧密地贴合在一起。一般来说，飞线图增强版的应用要广于飞线图。

```html
<dv-flyline-chart-enhanced :config="config" style="width:800px; height:800px;" />
```

#### 4.15.1config属性

|   属性    |         说明          |    类型     |    可选值     |              默认值               |
| :-------: | :-------------------: | :---------: | :-----------: | :-------------------------------: |
|  points   |        飞线点         |   `Point`   |      ---      |   `[]`[Point](#增强版Point属性)   |
|   line    |         飞线          | `Flyline[]` |      ---      | `[]`[Flyline](#增强版Flyline属性) |
|   halo    |     全局光晕配置      |   `Halo`    |      ---      |      [halo](#增强版halo属性)      |
|   text    |     全局文本配置      |   `Text`    |      ---      |      [text](#增强版text属性)      |
|   icon    |     全局图标配置      |   `Icon`    |      ---      |      [icon](#增强版icon属性)      |
|   line    |     全局飞线配置      |   `Line`    |      ---      |              `line`               |
| bgImgSrc  |       背景图src       |  `String`   |      ---      |               `''`                |
|     k     | 飞线收束程度 [1](#注) |  `Number`   |   `[-1, 1]`   |              `-0.5`               |
| curvature |   飞线曲率 [2](#注)   |  `Number`   |   `[1, 10]`   |                `5`                |
| relative  | 使用相对坐标 [3](#注) |  `Boolean`  | `true, false` |              `true`               |

#### 4.15.2.增强版Point属性

|    属性    |  说明  |    类型    | 可选值 | 默认值 |
| :--------: | :----: | :--------: | :----: | :----: |
|    name    | 点名称 |  `String`  |  ---   |  `-`   |
| coordinate | 点坐标 | `Number[]` |  ---   |  `-`   |

| halo | 点光晕配置 | `Halo` | --- | [halo](#增强版halo属性)
| text | 点文本配置 | `Text` | --- | [text](#增强版text属性) |
| icon | 点图标配置 | `Icon` | --- | [icon](#增强版icon属性)

#### 4.15.3.增强版Flyline属性

|    属性    |       说明       |        类型         | 可选值 |  默认值   |
| :--------: | :--------------: | :-----------------: | :----: | :-------: |
|   source   | 飞线起点的点名称 |      `String`       |  ---   |    `-`    |
|   target   | 飞线终点的点名称 |      `String`       |  ---   |    `-`    |
|   width    |     飞线宽度     |      `Number`       |  ---   | `inherit` |
|   color    |     飞线颜色     |      `String`       |  ---   | `inherit` |
| orbitColor |   飞线轨迹颜色   |  `String` [4](#注)  |  ---   | `inherit` |
|  duration  |   飞线动画时长   | `Number[]` [5](#注) |  ---   | `inherit` |
|   radius   |   飞线显示半径   |  `Number` [6](#注)  |  ---   | `inherit` |

#### 4.15.4.增强版halo属性

|   属性   |     说明     |    类型    | 可选值 |   默认值   |
| :------: | :----------: | :--------: | :----: | :--------: |
|   show   | 是否显示光晕 | `Boolean`  |  ---   |  `false`   |
| duration |   动画时长   | `Number[]` |  ---   | `[20, 30]` |
|  color   |   光晕颜色   |  `String`  |  ---   | `#fb7293`  |
|  radius  | 光晕最大半径 |  `Number`  |  ---   |   `120`    |

#### 4.15.5.增强版text属性

|   属性   |      说明      |    类型    | 可选值 |  默认值   |
| :------: | :------------: | :--------: | :----: | :-------: |
|   show   | 是否显示点名称 | `Boolean`  |  ---   |  `false`  |
|  offset  |  名称位置偏移  | `Number[]` |  ---   | `[0, 15]` |
|  color   |    名称颜色    |  `String`  |  ---   | `#ffdb5c` |
| fontSize |  名称文字大小  |  `Number`  |  ---   |   `12`    |

#### 4.15.6.增强版icon属性

|  属性  |      说明      |   类型    | 可选值 | 默认值  |
| :----: | :------------: | :-------: | :----: | :-----: |
|  show  | 是否显示点图标 | `Boolean` |  ---   | `false` |
|  src   |    图标src     | `String`  |  ---   |  `''`   |
| width  |    图标宽度    | `Number`  |  ---   |  `15`   |
| height |    图标高度    | `Number`  |  ---   |  `15`   |

#### 4.15.7.增强版line属性

|    属性    |     说明     |    类型    | 可选值 |          默认值           |
| :--------: | :----------: | :--------: | :----: | :-----------------------: |
|   width    |   飞线宽度   |  `Number`  |  ---   |            `1`            |
| orbitColor |   轨迹颜色   |  `String`  |  ---   | `rgba(103, 224, 227, .2)` |
|   color    |   飞线颜色   |  `String`  |  ---   |        `'#ffde93'`        |
|  duration  | 飞线动画时长 | `Number[]` |  ---   |        `[20, 30]`         |
|   radius   | 飞线显示半径 |  `Number`  |  ---   |           `100`           |

**注**

1. `k`决定了飞线的收束程度，当为负值时，飞线呈凸形聚合，为正值时，飞线呈凹形聚合。

2. `curvature`决定了飞线的弯曲程度，该值越小，飞线曲率越大，该值越大，飞线曲率越小。

3. `relative`用于控制是否启用相对坐标模式，默认启用相对坐标模式可以使得飞线点的位置按照飞线图组件宽高比计算，在飞线图宽高改变时，飞线点的位置也能够相对正确标识真实的物理位置。可以选取Dev模式下输出的点坐标信息。

4. 飞线轨迹颜色默认为`rgba(103, 224, 227, .2)`，如果想要隐藏轨迹线，可以设置`orbitColor`为`transparent`。

5. `duration`用于计算每一条飞线的动画时长（10 = 1s），`duration[0]`用于控制动画最短时长，`duration[1]`用于控制动画最长时长，飞线的动画时长将在此范围随机。如果想要每一条飞线的动画时长都相等可以将他们的值设为相同的。

6. `radius`控制了飞线的显示区域半径，该值越大，飞线显示范围越大，飞线越长；该值越小，飞线越短。

### 4.16.水位图

水位图有三种形态，多种配置，具体使用方法如下。

```html
<dv-water-level-pond :config="config" style="width:150px;height:200px" />
```

#### 4.16.1.矩形水位图

这是水位图的默认形态。其`config`如下。

```js
export default {
  data: [66]
}
```

`data`表示水位位置，在水位图中默认显示出该值，并自动添加百分号。

#### 4.16.2.圆角水位图

在矩形水位图的基础上增加了`config`的`shape`属性。

```js
export default {
  data: [66, 45],
  shape: 'roundRect'
}
```

`data`可以包含多个数值，会在水位图上显示不同的水面，但是数值仅显示最大值，且不能改变。

#### 4.16.3.圆形水位图

`config`的`shape`属性改为`'round'`。

#### 4.16.4.`config`属性

|    属性     |      说明      |      类型       |        可选值         |       默认值       |
| :---------: | :------------: | :-------------: | :-------------------: | :----------------: |
|    data     | 水位位置 (注1) | `Array<Number>` |          ---          |        `[]`        |
|    shape    |      形状      |    `String`     |    三种形状 (注2)     |      `'rect'`      |
|   colors    |   水位图配色   | `Array<String>` | `hex|rgb|rgba|关键字` |    渐变色 (注3)    |
|   waveNum   |    波浪数量    |    `Number`     |          ---          |        `3`         |
| waveHeight  |    波浪高度    |    `Number`     |          ---          |        `40`        |
| waveOpacity |   波浪透明度   |    `Number`     |          ---          |       `0.4`        |
|  formatter  |   信息格式化   |    `String`     |          ---          | `'{value}%'` (注4) |

注：

1. 可以有多个水位，但是默认显示值为最大值；
2. 矩形`rect`，圆角矩形`roundRect`，圆形`round`；
3. 默认配色为`['#00BAFF', '#3DE7C9']`，自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色；
4. 自动使用最大水位值替换`{value}`标记。





## 5.关于本地Json的引入步骤

- 首先，要将json文件上传至public文件夹-data文件夹内。

- 然后，在src/utils文件夹中的request.js的文件中新增一个函数，格式如下：

  ![image-20210425154824688](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210425154824688.png)

- 接着，在vue文件中导入的数据的方法是：

  - 首先在export default上面一行import刚才写的函数，格式如下，import {函数名} from ...

    ![image-20210425154957824](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210425154957824.png)

  - 然后，新建一个created()模块，表示渲染页面时执行某个操作

    ![image-20210425155159966](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210425155159966.png)

  - 其中，then()表示一个回调函数，表示执行getJson方法后继续执行某个操作，这里使用res=>{}形式来获取数据，格式为res.data，上图取到的数据为"vue"，因为我定义的json如下

    {

    ​	"hello":"vue"

    }

  - 赋值的时候，只需要将then()里面的内容改成下面的形式就行（其中mydata是在data()里面定义的数据）

    ![image-20210425155556744](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210425155556744.png)

  

> **另外，我们提供了引入外部json的实例，详情请参考实例中的用法**

-------

## 6.Demo复现全过程（简化版）

### 6.1.创建Vue项目

打开一个文件目录，命令行输入"vue create demo"，回车

### 6.2.进入项目目录，引入相关的组件

- 打开命令行，进入项目目录
  - cd demo

- 引入datav

  - npm install @jiaminghi/data-view

- 引入axios

  - npm install axios --save

### 6.3.写代码

- 修改main.js文件内容，全局注册datav组件，如下：
    - 修改前

  ![image-20210426011638559](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426011638559.png)

    - 修改后

  ![image-20210426012125205](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426012125205.png)

- 修改App.vue文件

  - 修改页面样式（为了更美观），修改style标签内的内容如下

    ![image-20210426014833837](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426014833837.png)

  - 添加对应的图表组件，将template标签内的内容修改为如下

    ![image-20210426014938432](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426014938432.png)

  - 修改script标签内的内容，修改为如下（config1、2、3、4表示4个图表配置项）

    ![](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426015151908.png)

  - 添加初始化页面用于渲染的函数created()

    ![](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426015326756.png)

  - 复制data文件夹到demo/public文件夹内，用于作为可视化的数据来源，有三个文件：data1.json、data2.json、data3.json

  - 在created()函数中调用axios获取json数据，并通过回调函数then将数据赋值给config1-4

    ![image-20210426015604514](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426015604514.png)

    ![image-20210426015626100](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426015626100.png)


### 6.4.运行代码，得到可视化结果

- 进入命令行，执行"npm run serve"

- 复制url，打开浏览器访问地址，比如：http://localhost:8081/

  ![](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426015941876.png)

- 得到的可视化结果如下：

  ![image-20210426020036671](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426020036671.png)

![image-20210426020044762](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210426020044762.png)

