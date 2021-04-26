import { InferActionsTypes } from "./redux-store";


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
type ActionsTypes = InferActionsTypes<typeof actions>

const dialogsReducer = (state = inicialState, action: ActionsTypes): inicialStateType => {
  switch (action.type) {
    case 'DIALOGS/ADD-MESSAGE': 
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


export const actions = {
  addMessageActionCreator: (newMessageText: string) => (
    { type: 'DIALOGS/ADD-MESSAGE', newMessageText} as const)
}




export default dialogsReducer;
