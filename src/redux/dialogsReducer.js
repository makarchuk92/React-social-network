const add_Message = "ADD-MESSAGE";



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
  ]
}


const dialogsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case add_Message: 
      let newMessage = {
        id: 3,
        message: action.newMessageText,
      };
        return {
        ...state,
        
        dialogsMessage: [...state.dialogsMessage, newMessage],
      }
      
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({ type: add_Message, newMessageText })


export default dialogsReducer;
