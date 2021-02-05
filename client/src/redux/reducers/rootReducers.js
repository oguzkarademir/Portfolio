import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    projects : projectReducer,
    articles : articleReducer,
    auth:authReducer
})

export default rootReducer;