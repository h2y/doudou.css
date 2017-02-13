# doudou.css

浏览器自带的标签样式实在是太难看了，不手动编写 CSS 是根本没法看的！

_doudou.css_ 提供了一系列全局级别的样式定义。只需引用这个 CSS 文件，不用做任何额外的事情，就能让浏览器渲染出漂亮的页面。

## * 开发目的

和 [_Bootstrap_](http://getbootstrap.com/) 等传统 CSS 框架最大的不同之处在于，_doudou.css_ 使用标签选择器定义样式。也就是说，覆盖了浏览器对标签默认的表现方式。

> 曾经在开发 Java Swing 程序时，用过一款界面美化组件 [BeautyEye](https://github.com/JackJiang2011/beautyeye)，导入至工程后，只需在入口处添加数条代码就能让原本丑陋的默认界面变得美观。_doudou.css_ 和该项目的定位相似，当然，在这里你除了导入 CSS 文件外并不需要再添加任何代码。

### 功能和定位

1. 消除各浏览器渲染标签时的差异。
2. 重写浏览器自带的标签样式，使其变得美观好看。
3. 直接按照 HTML 规范进行开发即可，无需顾虑 CSS 框架的使用方法。

这是一个美化版的 "Reset CSS"。

作为一个 web 页面第一个导入的 CSS 样式，开发的起点。_（可代替 [normalize.css](https://necolas.github.io/normalize.css/)）_

### 准则

1. 编写符合大众审美的样式。
2. 简约风格，能适用于所有类型的网站，便于二次开发。

## * 使用方法

**特别说明：**由于 _doudou.css_ 提供的是全局样式，所以你不能在导入它之后又导入其他的 CSS 框架，例如 [_Bootstrap_](http://getbootstrap.com/)。

### 直接链接

将下面的代码添加在 HTML 页面的 `<head>` 标签中，即可引用最新版本的 _doudou.css_：

```
<link rel="stylesheet" href="https://raw.githubusercontent.com/h2y/doudou.css/master/dist/doudou.min.css">
```

### 下载源文件

请使用上面代码中的链接下载 CSS 文件，然后在本地引用，通常会获得更快的加载速度。

也可以点击下面的链接下载项目的所有文件，包括源代码：

<https://github.com/h2y/doudou.css/archive/master.zip>

### NPM

```
npm i github:h2y/doudou.css#master --save
```

## * 效果展示

图右为标签的浏览器原始样式，左图为使用 _doudou.css_ 之后的效果。

> **图片仅为 _doudou.css_ 样式中的部分内容对比，全部差异的直观对比，推荐点击下面的链接：**

> **<https://h2y.github.io/doudou.css/test.html>**

![default](https://cloud.githubusercontent.com/assets/12909077/22880365/d7478dfc-f21c-11e6-9144-27efdd1dda4d.PNG)

## * 开发须知

_doudou.css_ 重写的标签仅为 HTML 规范内的标签，遵循 MDN 提供的 [HTML5 标签列表](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)。

本项目采用 [glup](http://gulpjs.com/) 构建，[Less](http://lesscss.org/) 来编写样式。`/lib` 为源代码目录，`/dist` 为输出目录。

你可能需要以下的命令进行开发：

```
# clone the project
git clone https://github.com/h2y/doudou.css.git
cd doudou.css/

# install dependencies
npm i --dev

# code in /lib ...

# build css
npm run start
```
