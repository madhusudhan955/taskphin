import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import globalReducer from "./reducers/globalReducer";
import homeReducer from "./reducers/homeReducer";

const rootReducer = combineReducers({
  homeReduxState: homeReducer,
  globalReduxState: globalReducer,
});
const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
