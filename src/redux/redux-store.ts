import {Action, applyMiddleware, combineReducers, createStore} from "redux"
import { ThunkAction } from "redux-thunk";
import postsReducer from './postsReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from "./usersReducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"

let reducers = combineReducers({
   postsPage: postsReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never 
export type InferActionsTypes<T extends {[key: string]: (...arg: any[]) => any}> = ReturnType<PropertiesType<T>>

export type BaseThunkType< A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

//@ts-ignore
 window.store = store


export default store