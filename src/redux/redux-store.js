import {combineReducers, createStore} from "redux"
import postsReducer from './postsReducer'
import dialogsReducer from './dialogsReducer'

let reducers = combineReducers({
   posts: postsReducer,
   dialogs: dialogsReducer
})

let store = createStore(reducers)


export default store