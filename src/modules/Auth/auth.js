import {combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {test} from './actions';



const testing = handleActions({
    [test]:(_state,action)=>action.payload
},'');


export default combineReducers({
    testing
})