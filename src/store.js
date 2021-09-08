import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import listReducer from "./reducers/listsReducer";
import pinsReducer from "./reducers/pinsReducer";
import formReducer from "./reducers/formReducer";

export const store = createStore(
    combineReducers({
        list: listReducer,
        pins: pinsReducer,
        form: formReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))

);

export default store;
