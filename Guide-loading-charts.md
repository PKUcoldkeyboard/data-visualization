## Loading

Loading图是在数据尚未加载完成时显示Loading的效果，增强用户体验。

展示为一个旋转的Loading图片

![image-20210425183047086](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210425183047086.png)

使用实例：

```vue
<dv-loading>Loading...</dv-loading>
```

补充说明：该图没有额外的属性设置

## 图表(Charts)

**Charts**是一个轻量级的简易图表，主要为[DataV大屏数据展示组件库](http://datav.jiaminghi.com/)提供图表支持，在该场景下不考虑图表交互，仅需展示效果，因此插件不提供交互及复杂功能。插件配置项参考**eCharts**，具有相关经验则极易上手使用。

提供的图表类型主要有：折线图、柱状图、饼状图、雷达图、仪表盘

在Vue文件中，这几种图的引入方式都一样，都是：

```vue
<dv-charts :option="option" />
```

只是这几个图传入的option配置变量不相同而已。

charts组件的配置项特别多，如下所示：

### 1、属性介绍

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

- 还有很多属性，这里不一一列举，为了快速上手，我们接下来从基本图标的制作入手。

### 2、基本图表制作

#### 1、折线图

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

#### 2、柱状图

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

#### 3、饼状图

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

#### 4、雷达图

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

#### 5、仪表盘

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

  