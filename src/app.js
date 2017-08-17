/**
 * app.js 是整个应用的入口文件
 * 所以在依赖方面，我们需要：1. React 来渲染所有的组件；2. 整个应用路由结构
 */
import ReactDOM from 'react-dom'; //只是这里为什么引入的是ReactDOM而不是React？
import routes from './routes/'

ReactDOM.render(routes, document.getElementById('root'));

/**
 * 回答上面的【只是这里为什么引入的是ReactDOM而不是React？】问题：
 * 看了一下其他项目，将组件渲染到DOM上的时候用的都是ReactDOM.render()方法
 * React 的 render() 方法是在创建组建的时候用的
 */