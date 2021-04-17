# datav-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).



## 分工

**（注意：之前的分工有变化，以本文档为主。考虑到庞上智要写项目安装部分的教程，并且搭建主页和路由也由其来完成，将部分其分工内容分担至了另外两名组员身上）**

**伊力亚尔：**边框、动态环图、进度池、数字翻牌器、轮播表、排名轮播表、锥形柱图

**庞上智**：搭建主页、介绍（包括创建项目、安装、引入等）、Loading加载、图表

**周子淼：**全屏容器、装饰、胶囊柱图、飞线图、飞线图增强版、水位图

-------



## DDL 安排：

**4月23日周五晚22:00前，大家完成分工内的部分，并写完自己部分的教程**

**届时可以再讨论一下展示方式，然后周末合并教程**



## 使用方法

### 1.运行项目

在 `datav-project` 的根目录下，cmd运行以下命令：

```
npm run serve
```



### 2.编写自己分工对应的部分

目前主页和路由等问题都已设置好，所以在 `datav-project/src/views` 目录中，选择自己分工对应的组件来编写即可。在主页中，可以点击对应组件来展示和调试。



#### 2.1 调试

具体位置是写到 template 中的 div ，如果遇到 style 问题（如大小、位置等问题），可以在当页中对<div>标签进行修饰，具体实例可见 `active-ring-chart.vue` 文件中，使元素居中的方法。

较推荐所有的组件都首先加上上述 style 修饰 （居中），即：

```
<style>
div{
	margin:0 auto;
	}
</style>
```

亦可进行其他调整



#### 2.2 数据嵌入

有些图标需要数据，嵌入方法如下：（还是以 `active-ring-chart.vue` 为例)

1. 教程网站上点击展示config数据后，会出现：

```
export default {
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
    }
  ]
}
```

2. 我们写到代码中的应该是：

```
export default{
  data(){return { config:{data:[
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
  ]
  }
  }
  }
  }
```

似乎是语法问题，也好像没有更好的办法，具体实例同样可参考 `active-ring-chart.vue`



### ！现成 style 样式！

我又更新了一下 `active-ring-chart.vue` 

加入了同一个页面**设置多个config的data**，可以参考

还有就是**加入了用来写文字的 <div>**，并且写好了样式，因为大家需要每个图给个title，直接用那个嵌套一下<p>就好



### 编写教程

目前是商定用 markdown 来写，然后到时候展示估计可以用markdown和网页一起来展示





--------

### 如遇到新的问题，欢迎解决后写入本文档并更新

