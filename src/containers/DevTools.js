/**
 * Redux Devtools:
 * 在 Redux 中，所有的数据变化都来自于一个个的action，
 * 因此，如果有一个工具能方便我们查看 action 的处罚记录以及数据的更改情况，我们就可以非常方便地进行调试
 * Redux 本身就提供这个功能。(还可以在开发者工具找到类似的)
 * Devtools并没有打包到 Redux包中，我们需要单独下载这些依赖：
 * $ npm install -D redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
 */

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtoold-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey = 'ctrl-h'
                 changePositionKey = 'ctrl-q'>
        <LogMonitor theme = 'tomorrow' />
    </DockMonitor>
);

export default DevTools;