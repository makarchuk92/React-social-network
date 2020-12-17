import { connect } from "react-redux";
import { withAuthredirect } from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator,
  updateNewMessageNextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";




const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
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

let AuthRedirectComponent = withAuthredirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)


export default DialogsContainer;
