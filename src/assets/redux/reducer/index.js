import { combineReducers } from "redux";
import { TaskReducer } from "./reducer";

export const RootReducer = combineReducers({
    task : TaskReducer
})