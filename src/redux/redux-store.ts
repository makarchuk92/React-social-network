import {applyMiddleware, combineReducers, createStore} from "redux"
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

//@ts-ignore
 window.store = store


export default store