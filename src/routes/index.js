/**
 * Routes 文件夹下的 index.js 正是用于配置整个应用的路由信息
 * 首先：应引入所有需要的依赖
 * 再：使用 react-router 提供的组件来定义应用的路由
 */

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';

const routes = (
  <Router history={hashHistory}>
    <Route path = "/" component = { Home }></Route>
    <Route path = "/detail" component = { Detail }></Route>
  </Router>
);
export default routes;
/**
 * 【hashHistory VS browserHistory】
 * 在上述配置里，我们先告诉 react-router 使用 hashHistory 作为前端路由的实现方式,
 * 通过改变 URL 的散列值 (#后面的部分)来实现路由的切换。使用 hashHistory 的好处是
 * 实现简单，兼容性好，不需要做额外的服务端改造。
 * 
 * 如果追求更好的用户体验，使用 browserHistory 是更好的选择。 browserHistory 使用
 * 的是 HTML5 的 pushState API。这种技术也有一定的局限性，首先需要服务器端将所有的
 * 请求重定向到首页，其次部分较老的浏览器并不支持 pushState 技术。
 * 
 * 为了得到更好的兼容性，我们在实例项目中选择 hashHistory。
 */