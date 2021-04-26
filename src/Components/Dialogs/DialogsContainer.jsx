import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthredirect } from "../../hoc/withAuthRedirect";
import {
  actions
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";




const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
    newMessageText: ""
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(actions.addMessageActionCreator(newMessageText));
    }
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthredirect
)(Dialogs)
