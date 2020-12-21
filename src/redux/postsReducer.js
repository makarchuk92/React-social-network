import { profileAPI } from "../api/api";
const add_Post = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState =  {
  postData: [
    { id: "Andrey", text: "I am Andrew and my profession It", LikeUp: "12" },
  ],
  profile: null,
  status: ""
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_Post: 
      let newPost = {
        id: 3,
        text: action.newPostText,
        LikeUp: 0,
      };
      
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost]
      }

      case SET_USER_PROFILE :
        return {
          ...state,
          profile: action.profile
        }

        case SET_STATUS:
          return {
            ...state,
            status: action.status
          }

    default:
      return state;
  }
};


export const addPostActionCreator = (newPostText) => ({ type: add_Post, newPostText })

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, profile
})

export const setStatus = (status) => ({
  type: SET_STATUS, status
})

export const getUserProfile = (userId) => {
  return(dispatch) => {
    profileAPI.getProfile(userId)
    .then(response => {
       dispatch(setUserProfile(response.data))
    })
  }
}

export const getUserStatus = (userId) => {
  return(dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data))
    })
  }
}

export const updateStatus = (status) => {
  return(dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}

export default postsReducer;
