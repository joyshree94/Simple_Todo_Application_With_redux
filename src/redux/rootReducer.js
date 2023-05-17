import { combineReducers } from "redux";
import filterReducer from "./filters/reducers";
import todoReducer from "./todos/reducers";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
});

export default rootReducer;
