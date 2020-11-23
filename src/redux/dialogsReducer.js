const add_Message = "ADD-MESSAGE";
const update_New_Message_Text = "UPDATE-NEW-MESSAGE-TEXT";


let inicialState = {
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
}


const dialogsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case add_Message:
      let newMessage = {
        id: 3,
        message: state.newMessageText,
      };
      state.dialogsMessage.push(newMessage);
      state.newMessageText = "";
      return state;
    case update_New_Message_Text:
      state.newMessageText = action.messageText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: add_Message })

export const updateNewMessageNextActionCreator = (newText) => ({ 
  type: update_New_Message_Text, messageText: newText
})

export default dialogsReducer;
