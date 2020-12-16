import { userAPI } from "../api/api";

const add_Post = "ADD-POST";
const update_New_Post_text = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState =  {
  postData: [
    { id: "Andrey", text: "I am Andrew and my profession It", LikeUp: "12" },
  ],
  newPostText: 'Hello people!!!',
  profile: null
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
      
      case SET_USER_PROFILE :
        return {
          ...state,
          profile: action.profile
        }

    default:
      return state;
  }
};


export const addPostActionCreator = () => ({ type: add_Post })

export const updateNewPostTextActionCreator = (postText) => ({
  type: update_New_Post_text, newText: postText    
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, profile
})


export const getUserProfile = (userId) => {
  return(dispatch) => {
    userAPI.getProfile(userId)
    .then(response => {
       dispatch(setUserProfile(response.data))
    })
  }
}

export default postsReducer;
