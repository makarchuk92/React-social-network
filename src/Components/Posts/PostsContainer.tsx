import { connect } from "react-redux";
import { actions } from "../../redux/postsReducer";
import Posts, { MapStatePostsPropsType, MapDispatchPostsPropsType } from "./Posts";
import { AppStateType } from '../../redux/redux-store';




let mapStateToProps = (state: AppStateType) => {
  return {
    postData: state.postsPage.postData,
    //newPostText: state.postsPage.newPostText,
  }
}


// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: (newPostText) => {
//       dispatch(actions.addPostActionCreator(newPostText));
//     }
//   }
// }

const PostsContainer = connect<MapStatePostsPropsType, MapDispatchPostsPropsType, {}, AppStateType>(
  mapStateToProps, {
  addPost: actions.addPostActionCreator
} ) (Posts)

export default PostsContainer;
