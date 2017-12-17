import { combineReducers } from "redux";

import {
    ADD_POST
} from "../actions";

function addPost(state = {}, action) {
    switch (action.type) {
        case ADD_POST :
            return action;
        default :
            return state;
    }
}

export default combineReducers({
  addPost
});
