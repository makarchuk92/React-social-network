import {rerenderEntireTree} from "./../render"

let state = {
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
  },
  
  posts: {
    postData: [
      { id: "Andrey", text: "I am Andrew and my profession It", LikeUp: "12" },
      { id: "Sergei", text: "I am Sergei and my profession It", LikeUp: "11" },
      { id: "Alexander", text: "I am Alexander and my profession It", LikeUp: "13" },
    ]
  } 
}

export let addMessage = (messageText) => {

  let newMessage = {
    id: 3,
    message: messageText,
  }
  state.dialogs.dialogsMessage.push(newMessage)
  rerenderEntireTree(state)
}


export default state