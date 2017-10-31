# 如何构建一个Redux应用

此项目是根据《深入React技术栈》第五章第六节Redux 应用实例而来。目的在于手敲一遍源码来增强记忆。在写的时候会多加注释说明，写的时候的心得体会也会放在里面。
## I. npm install

新建工程目录之后的第一件事是在Node上将所需的依赖包安装完毕，其中包括：

+-- <font color="orange">react@15.6.1</font>
<br />
+-- <font color="orange">react-dom@15.6.1</font>
<br />
+-- <font color="orange">redux@5.0.6</font>
<br />
+-- <font color="orange">react-router@4.1.2</font>
<br />
+-- <font color="orange">react-redux@4.0.8</font>
<br />
+-- <font color="orange">react-router-redux@3.7.2</font>
<br />
`-- <font color="orange">whatwg-fetch@2.0.3</font>
<br />


## II. 划分目录结构

`包含了上一步中利用指令生成的文件(夹)`

```
.
 ├── node_modules                   
 ├── package.json                    
 ├── src                            所有源代码存放的路径
 │    ├── app.js                    整个应用的入口
 │    ├── views                     应用中某个页面的入口文件，一般为路由组件
 │    │   ├── Home.js               例如，首页的入口就是 Home.js
 │    │   ├── Home.css              Home 页面对应的样式
 │    │   └── HomeRedux.js          Home 页面中所有与 Redux 相关的 Reducer、action creator 的汇总，即components/
 │    │                             Home/下所有*Redux.js的汇总
 │    ├── components                所有应用的组件
 │    │   ├── Home                  例如，views/ 中一个名为 Home 的 view, 则在 components/ 中就有一个名为 Home 
 │    │   │   │                     的子文件夹
 │    │   │   ├──Table.js           Home 页面中的一个列表组件
 │    │   │   ├──Table.css          列表组件对应的样式
 │    │   │   └──TableRedux.js      列表组建的reducer、action creator 及 action type，整合在同
 │    │   │                         一个文件夹中
 │    │   └── shared                不归属于任何 view 的组件、 如一些公共组件等
 │    ├── comtainers                                
 │    │   ├── DevTools.js           配置 DevTools
 │    │   └── Root.js               一般被 app.js 依赖，用于根据环境判断是否需要加载 DevTools
 │    ├── layouts                   布局相关的组件及样式，如菜单、侧边栏、header、footer等
 │    ├── redux                     Redux store 相关的配置
 │    │   └── reducer.js            整个应用中所有 reducer 的汇总
 │    ├── routes                    路由相关的配置
 │    ├── utils                     工具函数、常量等
 │    ├── styles                    全局公共样式
 │    └── app.css                   应用主样式表 
 ├── test
 ├── index.html                     用于加载所有的脚本和样式文件                     
 └── build  
```
其中，只需要关注 `views/` 和 `components/` 这两个文件夹，他们存放绝大多数业务逻辑代码
* `views/` 文件夹中，存放的是每个路由的入口，如首页、详情页和管理后台页等（每个页对应着一个文件夹）。每个入口会有三个文件: <b> \*.js </b>是入口的组件，<b> *.css </b>是对应组件的样式，而<b> *Redux.js </b>是 components/Home/ 文件夹下所有 reducer 和 action 的聚合。
* `components/` 文件夹中，是当前路由对应的页面所需要的所有内容——components、actions、reducers、样式等。

## III. 设计路由
`设计路由时新增的目录结构，并针对博客系统的设计增加以下组件(Detail)`
```                 
   src/                            
    ├── components                
    │   ├── Detail        文章详情页
    │   └── Home          文章列表页           
    ├── routes
    │   └── inedx.js      配置整个应用的路由信息                         
    └── views               
        ├── Detail.css
        ├── Detail.js
        ├── DetailRedux.js
        ├── Home.css
        ├── Home.js             
        └── HomeRedux.js               
```
剩下具体的路由配置可以在["/src/routes/index.js"](https://github.com/XiangLuoyang/ReduxDemo/blob/master/src/routes/index.js)的注释中详细说明。

## IV. 增加入口文件
```
1. 将 index.html中的节点绑定到 React 上(通过 ReactDOM )。
2. 配置 webpack (配置文件见 webpack.config.js )。
    └──这里配置完 webpack.config.js 后，可以在 package.json 文件中添加 script 字段。
3. 这里要注意 webpack 和 react-router 的版本。
   书中的配置推荐是 webpack@1.13.1, router@3.x。
   无论如何，babel 的配置方法具体看代码，还要手动创建 .babelrc 文件及其 preset 字段。
```

## V. 优化构建脚本

实现目标：Redux 应用的热重载，代码的实时更新可以自动体现在浏览器上。<br />
利用工具：webpack-dev-server

## VI. 添加布局文件
`新增布局文件`
```
   src/                            
    ├── components   
    ├── layouts     
    │    ├── Frame.js             
    │    └── Nav.js     导航栏
    ├── routes                      
    └── views  
```

## VII. 准备首页的数据
## VIII. 连接 Redux