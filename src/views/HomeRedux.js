import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import list from '../components/Home/PreviewListRedux';
import * as loadArticles from '../components/Home/PreviewListRedux';

export default combineReducers({
  list,
});

export const listActions = {
  loadArticles,
};