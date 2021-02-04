import { compose, applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducers"

const store = createStore(rootReducer, compose(applyMiddleware(thunk), composeWithDevTools()));

export default store;
