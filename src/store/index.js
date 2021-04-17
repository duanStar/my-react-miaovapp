import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import list from './reducer/list';
import login from './reducer/login';
import works from './reducer/works';
import lecturers from './reducer/lecturers';
import work from './reducer/work';
import good from './reducer/good';
import messageList from './reducer/messageList';

let reducer = combineReducers({
    list,
    login,
    works,
    lecturers,
    work,
    good,
    messageList
});

let store = createStore(reducer,applyMiddleware(thunk));

export default store;