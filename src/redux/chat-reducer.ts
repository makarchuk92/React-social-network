import { Dispatch } from 'redux';
import { chatApi, ChatMessageType } from './../api/chat-api';
import { stopSubmit } from "redux-form";
import { BaseThunkType, InferActionsTypes } from "./redux-store";



let inicialState = {
  messages: [] as ChatMessageType[]
}
export type inicialStateType = typeof inicialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>

export const chatReducer = (state = inicialState, action: ActionsTypes): inicialStateType => {
  switch (action.type) {
    case 'chat/MESSAGES_RECEIVED':
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages]
      }
    default:
      return state;
  }
};

const actions = {
  messagesReceived: (messages: ChatMessageType[]) =>
    ({ type: 'chat/MESSAGES_RECEIVED', payload: { messages } } as const)
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReceived(messages))
    }
  }
  return _newMessageHandler
}


export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.start()
  chatApi.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.subscribe(newMessageHandlerCreator(dispatch))
  chatApi.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatApi.sendMessage(message)
}


export default chatReducer