/**
 * 定义了一个纯渲染、无状态的文章预览组件
 */
import React, {Component} from 'react';
import './Preview.css';
import { push } from 'react-router-redux';

class Preview extends Component {
    static propTypes = {
        title: React.PropTypes.string,
        link: React.PropTypes.string,
        push: React.PropTypes.func,
    };

    handleNavigate(id, e) {
        // 阻止原生链接跳转
        e.preventDefault();

        // 使用 react-router-redux 提供的方法跳转，以便更新对应的 store
        this.props.push('/detail/${id}');
    }
    render() {
        return (
            <article className="article-preview-item">
                <h1 className="title">
                  <a href = {`detail/${this.props.id}`} onClick = {this.handleNavigate.bind(this,this.props.id)}>
                    {this.props.title}
                  </a>
                </h1>
                <span className="date">{this.props.date}</span>
                <p className="desc">{this.props.description}</p>
            </article>
        );
    }
}

export default Preview;