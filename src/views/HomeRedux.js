import { combineReducers } from 'redux';
//引入 reducer 及 actionCreator
import list from '../components/Home/PreviewListRedux';
export default combineReducers({
    list,
});

import * as listAction from '../components/Home/PreviewListRedux';
export const listAction;