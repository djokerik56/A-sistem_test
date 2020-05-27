import { createStore, combineReducers, applyMiddleware } from "redux";
import cardReducer from "./card-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    card: cardReducer,
});

let store = createStore( reducers, applyMiddleware(thunkMiddleware));
export default store;