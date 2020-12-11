import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/postsReducer";
import Posts from "./Posts";



let mapStateToProps = (state) => {
  return {
    postData: state.postsPage.postData,
    newPostText: state.postsPage.newPostText,
    state: state.postsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (postText) => {
      dispatch(updateNewPostTextActionCreator(postText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer;
