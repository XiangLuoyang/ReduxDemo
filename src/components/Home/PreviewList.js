/**
 * PreviewList 也是一个无状态组件，它引入了Preview组件，并将传入的
 * articleList 遍历渲染出若干个对应的 Preview 组件
 */
import React, { Component } from 'react';
import Preview from './Preview';

class PreviewList extends Component {
    static propTypes = {
        articleList: React.PropTypes.arrayOf(React.PropTypes.object)
    };

    render(){
        return this.props.articleList.map(item=>(
            <Preview {...item} key={item.id} />
        ));
    }
}