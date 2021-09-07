import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import listReducer from "./reducers/listsReducer";
import pinsReducer from "./reducers/pinsReducer";

export const store = createStore(
    combineReducers({
        list: listReducer,
        pins: pinsReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))

);

// const store = createStore(listReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(pinsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
