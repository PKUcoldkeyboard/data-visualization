# DataV安装说明文档

​							小组成员：庞上智、伊力亚尔、周子淼

## 1.DataV简介

DataV是一个基于Vue或React的组件库主要用于构建大屏（**全屏**）数据展示页面即**数据可视化**，具有多种类型组件可供使用（本教程使用的DataV是基于Vue的）：

- **边框**：带有不同边框的容器。

- **装饰**：用来点缀页面效果，增加视觉效果。

- **图表**：图表组件基于Charts封装，轻量，易用。

- **其他**：飞线图/水位图/轮播表等。

---

> * 注：DataV组件库的开发和调试都使用Chrome浏览器，没有做其他浏览器的兼容，尤其是IE，所以**请使用Chrome浏览器**。

## 2.DataV安装

### 2.1. npm环境配置

#### 2.1.1. 下载最新版本的nodeJs

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

#### 2.1.2. 配置镜像源

这一步主要是提高npm安装包的速度，因为可能有一些依赖包是国外的，下载速度会特别慢。

配置镜像源特别简单，只需在命令行输入

"npm config set registry=http://registry.npm.taobao.org"，即可设置好镜像源。

然后在命令行输入

"npm config get registry"，检查镜像站是否设置成功。

![image-20210424004035679](https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210424004035679.png)

> *注：我的镜像地址是华为云的，如果你是按照上面的命令设置镜像站，显示的内容则应该为
>
> http://registry.npm.taobao.org

### 2.2. Vue/Cli安装

有了npm后，这两者的安装就比较容易了。

只需在命令行中依次输入以下命令即可：

"npm i -g @vue/cli"

### 2.3. datav.js安装

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

