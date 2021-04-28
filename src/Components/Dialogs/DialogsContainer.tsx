import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthredirect } from "../../hoc/withAuthRedirect";
import { actions } from "../../redux/dialogsReducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";




const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}



export default compose(
  connect(mapStateToProps, {...actions}),
  withAuthredirect
)(Dialogs)
