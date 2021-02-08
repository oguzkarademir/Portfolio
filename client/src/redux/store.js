import { compose, applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducers"

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
