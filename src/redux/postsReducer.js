const add_Post = "ADD-POST";
const update_New_Post_text = "UPDATE-NEW-POST-TEXT";

const postsReducer = (state, action) => {
  switch (action.type) {
    case add_Post:
      let newPost = {
        id: 3,
        text: state.newPostText,
        LikeUp: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case update_New_Post_text:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};


export const addPostActionCreator = () => ({ type: add_Post })

export const updateNewPostTextActionCreator = (postText) => ({
  type: update_New_Post_text, newText: postText    
})

export default postsReducer;
