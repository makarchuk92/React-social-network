import { connect } from "react-redux";
import {
  addPostActionCreator,
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
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer;
