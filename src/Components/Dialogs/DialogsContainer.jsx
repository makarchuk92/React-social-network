import React from "react";
import {addMessageActionCreator, updateNewMessageNextActionCreator} from '../../redux/dialogsReducer'
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  let state = props.store.getState()

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())    
  } 

  let onMessageChange = (newText) => {
    props.store.dispatch(updateNewMessageNextActionCreator(newText))
  }

  return (
   <Dialogs updateNewMessageNext={onMessageChange}  addMessage={addMessage}
   state={state.dialogs} newMessageText={state.dialogs.newMessageText}
   />
  );
};

export default DialogsContainer;
