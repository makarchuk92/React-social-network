import dialogsReducer from "./dialogsReducer"
import postsReducer from  "./postsReducer"



let store = {
  _state: {
    dialogs: {
      dialogsName: [
        { id: "Andrey", name: "- Andrey -" },
        { id: "Sergey", name: "- Sergey -" },
        { id: "Sasha", name: "- Sasha -" },
        { id: "Aleks", name: "- Aleks -" },
        { id: "Anastasia", name: "- Anastasia -" },
      ],
      
      dialogsMessage: [
        { id: 1, message: "Hello, i am Andrey" },
        { id: 2, message: "Hello, i am Sergey" },
      ],
  
      newMessageText: ''
    },
    
    posts: {
      postData: [
        { id: "Andrey", text: "I am Andrew and my profession It", LikeUp: "12" },
        { id: "Sergei", text: "I am Sergei and my profession It", LikeUp: "11" },
        { id: "Alexander", text: "I am Alexander and my profession It", LikeUp: "13" },
      ],
  
      newPostText: 'Hello people!!!'
    }, 
  },
  getState() {
    return this._state;
  },

  _rerenderEntireTree() {

  },

  dispatch(action) {
    this._state.posts = postsReducer(this._state.posts, action)
    this._state.dialogs = dialogsReducer(this._state.dialogs, action)

     this._rerenderEntireTree(this._state)
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer
  }

}








export default store