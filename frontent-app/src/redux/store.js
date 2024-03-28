import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as authReducer} from "./authReducer/authReducer";
import {reducer as taskReducer} from "./taskReducer/taskReducer";
import {thunk, withExtraArgument} from "redux-thunk"; 

const rootReducer= combineReducers({authReducer,taskReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))