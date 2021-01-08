import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
const add_Post = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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

          case SAVE_PHOTO_SUCCESS:
            return {
              ...state,
              profile: {...state.profile, photos: action.photos}
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

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS, photos
})

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
       dispatch(setUserProfile(response.data))
  }
}

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
      dispatch(setStatus(response.data))
  }
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
      if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
  }
}

export const savePhoto = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
      if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
      }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
      if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
      } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
      }
  }
}

export default postsReducer;
