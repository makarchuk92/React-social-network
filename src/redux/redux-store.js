import {applyMiddleware, combineReducers, createStore} from "redux"
import postsReducer from './postsReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from "./usersReducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
   postsPage: postsReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

 window.store = store


export default store