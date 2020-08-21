import { combineReducers } from 'redux';
import searchReducer from './search';
import callUserList from './userList';
import callRepoList from './repoList';
import callCommitsList from './commits';

const rootReducer = combineReducers({
    keyword: searchReducer,
    userList: callUserList,
    repoList: callRepoList,
    commitsList: callCommitsList
})

export default rootReducer;