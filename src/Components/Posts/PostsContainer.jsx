import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/postsReducer";
import Posts from "./Posts";


// const PostsContainer = () => {
//   return ( <StoreContext.Consumer>
//        { (store) => {
//            let state = store.getState();
//            let addPost = () => {
//              store.dispatch(addPostActionCreator());
//            };
         
//            let onPostChange = (postText) => {
//              store.dispatch(updateNewPostTextActionCreator(postText));
//            };
//         return <Posts
//         updateNewPostText={onPostChange}
//         addPost={addPost}
//         postData={state.posts.postData}
//         newPostText={state.posts.newPostText}
//         state={state.posts}
//       />}
//        }  
//     </StoreContext.Consumer>
//   );
// };


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
