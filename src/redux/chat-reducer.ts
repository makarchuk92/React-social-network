import { Dispatch } from 'redux';
import { chatApi, ChatMessageType, StatusType } from './../api/chat-api';
import { stopSubmit } from "redux-form";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { v1 } from 'uuid';


type ChatType = ChatMessageType & {id: string}

let inicialState = {
  messages: [] as ChatType[],
  status: 'pending' as StatusType
}
export type inicialStateType = typeof inicialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>

export const chatReducer = (state = inicialState, action: ActionsTypes): inicialStateType => {
  switch (action.type) {
    case 'chat/MESSAGES_RECEIVED':
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))].
        filter((m, index, array) => index >= array.length - 50)
      }
    case 'chat/STATUS_CHANGED':
      return {
        ...state,
        status: action.payload.status
      }    
    default:
      return state;
  }
};

const actions = {
  messagesReceived: (messages: ChatMessageType[]) =>
    ({ type: 'chat/MESSAGES_RECEIVED', payload: { messages } } as const),
  statusChanged: (status: StatusType) => 
    ({type: 'chat/STATUS_CHANGED', payload: {status}} as const)  
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


let _statusChangedHandler: ((status: StatusType) => void) | null = null

const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status))
    }
  }
  return _statusChangedHandler
}


export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.start()
  chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
  chatApi.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatApi.sendMessage(message)
}


export default chatReducer