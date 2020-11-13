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
  
      newMessageText: 'Hi,'
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

  rerenderEntireTree() {

  },

  addMessage() {
    let newMessage = {
      id: 3,
      message: this._state.dialogs.newMessageText,
    }
    this._state.dialogs.dialogsMessage.push(newMessage)
    this._state.dialogs.newMessageText='';
    this._rerenderEntireTree(this._state)
  },

  updateNewMessageText(messageText) {
    this._state.dialogs.newMessageText = messageText
    this._rerenderEntireTree(this._state)
  },

  addPost() {

    let newPost = {
      id: 3,
      text: this._state.posts.newPostText,
      LikeUp: 0
    }
    this._state.posts.postData.push(newPost)
    this._state.posts.newPostText = '';
      
    this._rerenderEntireTree(this._state)
  },
  updateNewPostText(newText) {
    this._state.posts.newPostText = newText
    this._rerenderEntireTree(this._state)
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer
  },


}



export default store