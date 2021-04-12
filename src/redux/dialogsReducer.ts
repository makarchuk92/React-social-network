const add_Message = "ADD-MESSAGE";

type dialogsNameType = {
  id: number
  name: string
}

type dialogsMessageType = {
  id: number
  message: string
}

let inicialState = {
  dialogsName: [
    { id: 1, name: "- Andrey -" },
    { id: 2, name: "- Sergey -" },
    { id: 3, name: "- Sasha -" },
    { id: 4, name: "- Aleks -" },
    { id: 5, name: "- Anastasia -" },
  ] as Array<dialogsNameType>,
  
  dialogsMessage: [
    { id: 1, message: "Hello, i am Andrey" },
    { id: 2, message: "Hello, i am Sergey" },
  ] as Array<dialogsMessageType>
}

type inicialStateType = typeof inicialState

const dialogsReducer = (state = inicialState, action: any): inicialStateType => {
  switch (action.type) {
    case add_Message: 
      let newMessage = {
        id: 3,
        message: action.newMessageText,
        newMessageText: ""
      };
        return {
        ...state,
        dialogsMessage: [...state.dialogsMessage, newMessage],
      }
      
    default:
      return state;
  }
};

type addMessageActionCreatorType = {
  type: typeof add_Message
  newMessageText: string
}

export const addMessageActionCreator = (newMessageText: string): addMessageActionCreatorType => (
  { type: add_Message, newMessageText})


export default dialogsReducer;
