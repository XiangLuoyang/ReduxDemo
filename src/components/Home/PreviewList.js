/**
 * PreviewList 也是一个无状态组件，它引入了Preview组件，并将传入的
 * articleList 遍历渲染出若干个对应的 Preview 组件
 */
import React, { PropTypes, Component } from 'react';
import Preview from './Preview';

class PreviewList extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        error: PropTypes.bool,
        articleList: React.PropTypes.arrayOf(React.PropTypes.object),
        loadArticles: PropTypes.func,
    };
    
    componentDidMount() {
        this.props.loadArticles();
    }

    render(){
        const { loading, error, articleList } = this.props;

        if(error) {
            return <p className="message">Oops, something is wrong.</p>
        }

        if(loading) {
            return <p className="message">Loading...</p>;
        }

        return articleList.map(item => (<Previw {...item} key={item.id} />));
    }
}
// export 部分千万不要忘记了
export default PreviewList;