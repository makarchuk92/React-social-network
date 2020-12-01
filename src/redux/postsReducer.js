const add_Post = "ADD-POST";
const update_New_Post_text = "UPDATE-NEW-POST-TEXT";

let initialState =  {
  postData: [
    { id: "Andrey", text: "I am Andrew and my profession It", LikeUp: "12" },
    { id: "Sergei", text: "I am Sergei and my profession It", LikeUp: "11" },
    { id: "Alexander", text: "I am Alexander and my profession It", LikeUp: "13" },
  ],

  newPostText: 'Hello people!!!'
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_Post: 
      let newPost = {
        id: 3,
        text: state.newPostText,
        LikeUp: 0,
      };
      
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost]
      }
      
    case update_New_Post_text: 
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state;
  }
};


export const addPostActionCreator = () => ({ type: add_Post })

export const updateNewPostTextActionCreator = (postText) => ({
  type: update_New_Post_text, newText: postText    
})

export default postsReducer;
