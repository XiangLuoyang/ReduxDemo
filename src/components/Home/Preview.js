/**
 * 定义了一个纯渲染、无状态的文章预览组件
 */
import React, {Component} from 'react';
import './Preview.css';

class Preview extends Component {
    static propTypes = {
        title: React.PropTypes.string,
        link: React.PropTypes.string,
    };

    render() {
        return (
            <article className="article-preview-item">
                <h1 className="title">{this.props.title}</h1>
                <span className="date">{this.props.date}</span>
                <p className="desc">{this.props.description}</p>
            </article>
        );
    }
}