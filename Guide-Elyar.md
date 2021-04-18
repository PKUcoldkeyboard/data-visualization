# 教程

## 边框

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





## 动态环图

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

### config属性

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

### data属性

| 属性  |    说明    |   类型   | 可选值 | 默认值 |
| :---: | :--------: | :------: | :----: | :----: |
| name  | 环对应名称 | `String` |  ---   |  ---   |
| value |  环对应值  | `Number` |  ---   |  ---   |





## 进度池

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

### config属性

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





## 锥形柱图

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

### config属性

|     属性      |    说明     |      类型       |                            可选值                            |           默认值           |
| :-----------: | :---------: | :-------------: | :----------------------------------------------------------: | :------------------------: |
|     data      |   柱数据    | `Array<Object>` | [data属性](http://datav.jiaminghi.com/guide/conicalColumnChart.html#data属性) |            `[]`            |
|      img      | 柱顶图片url | `Array<String>` |                             ---                              |            `[]`            |
|   fontSize    |  文字大小   |    `Number`     |                             ---                              |            `12`            |
| imgSideLength |  图片边长   |    `Number`     |                             ---                              |            `30`            |
|  columnColor  |   柱颜色    |    `String`     |                             ---                              | `'rgba(0, 194, 255, 0.4)'` |
|   textColor   |  文字颜色   |    `String`     |                             ---                              |          `'#fff'`          |
|   showValue   |  显示数值   |    `Boolean`    |                             ---                              |          `false`           |

### data属性

| 属性  |  说明  |   类型   | 可选值 | 默认值 |
| :---: | :----: | :------: | :----: | :----: |
| name  | 柱名称 | `String` |  ---   |  ---   |
| value | 柱数值 | `Number` |  ---   |  ---   |





## 数字翻牌器

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

### config属性

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





## 轮播表

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

### config属性

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

#### click事件

当单元格被点击时（表头不支持），轮播表将抛出一个`click`事件，包含被点击的单元格的相关数据

#### mouseover事件

当鼠标悬浮在某个单元格上时（表头不支持），轮播表将抛出一个`mouseover`事件，包含被悬浮单元格的相关数据

#### click & mouseover 事件数据属性

|    属性     |    说明    |      类型       | 可选值 | 默认值 |
| :---------: | :--------: | :-------------: | :----: | :----: |
|     row     | 所在行数据 | `Array<String>` |  ---   |  ---   |
|    ceil     | 单元格数据 | `Array<Array>`  |  ---   |  `[]`  |
|  rowIndex   |   行索引   |    `Number`     |  ---   |  ---   |
| columnIndex |   列索引   |    `Number`     |  ---   |  ---   |





## 排名轮播表

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

### config属性

|      属性      |       说明       |      类型       |                            可选值                            |   默认值    |
| :------------: | :--------------: | :-------------: | :----------------------------------------------------------: | :---------: |
|      data      |      表数据      | `Array<Object>` | [data属性](http://datav.jiaminghi.com/guide/scrollRankingBoard.html#data属性) |    `[]`     |
|     rowNum     |      表行数      |    `Number`     |                             ---                              |     `5`     |
|    waitTime    | 轮播时间间隔(ms) |    `Number`     |                             ---                              |   `2000`    |
|    carousel    |     轮播方式     |    `String`     |                      `'single'|'page'`                       | `'single'`  |
|      unit      |     数值单位     |    `String`     |                             ---                              |    `''`     |
|      sort      |     自动排序     |    `Boolean`    |                             ---                              |   `true`    |
| valueFormatter |    数值格式化    |   `Function`    |                             ---                              | `undefined` |

### data属性

| 属性  | 说明 |   类型   | 可选值 | 默认值 |
| :---: | :--: | :------: | :----: | :----: |
| name  | 名称 | `String` |  ---   |  ---   |
| value | 数值 | `Number` |  ---   |  ---   |



对于轮播表中的数值进行格式化的valueFormatter函数的参数如下：

### valueFormatter参数属性

|  属性   |  说明  |   类型   | 可选值 | 默认值 |
| :-----: | :----: | :------: | :----: | :----: |
|  name   |  名称  | `String` |  ---   |  ---   |
|  value  |  数值  | `Number` |  ---   |  ---   |
| percent | 百分比 | `Number` |  ---   |  ---   |
| ranking |  排名  | `Number` |  ---   |  ---   |