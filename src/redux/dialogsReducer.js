const add_Message = "ADD-MESSAGE";
const update_New_Message_Text = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
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
