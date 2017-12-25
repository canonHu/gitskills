import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

function addPost(state = {}, action) {
    switch (action.type) {
        case types.ADD_POST :
            return action;
        default :
            return state;
    }
}

export default combineReducers({
  addPost
});
