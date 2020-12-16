import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageNextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//   return ( <StoreContext.Consumer>
//       { (store) => {
//          let state = store.getState();

//          let addMessage = () => {
//            store.dispatch(addMessageActionCreator());
//          };
       
//          let onMessageChange = (newText) => {
//            store.dispatch(updateNewMessageNextActionCreator(newText));
//          };
//       return <Dialogs
//         updateNewMessageNext={onMessageChange}
//         addMessage={addMessage}
//         state={state.dialogs}
//         newMessageText={state.dialogs.newMessageText}
//       />}
//     }
//     </StoreContext.Consumer>
//   );
// };


const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,

    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageNext: (newText) => {
      dispatch(updateNewMessageNextActionCreator(newText));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)


export default DialogsContainer;
