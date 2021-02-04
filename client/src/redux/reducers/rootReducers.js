import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
    projects : projectReducer,
    articles : articleReducer
})

export default rootReducer;