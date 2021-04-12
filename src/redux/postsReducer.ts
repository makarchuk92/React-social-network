import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import { PhotosType, PostDataType, ProfileType } from "../Types/types";


const add_Post = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"



let initialState =  {
  postData: [
    { id: 1, text: "I am Andrew and my profession It", LikeUp: 12 },
  ] as Array<PostDataType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: ""
}

export type initialStateType = typeof initialState

const postsReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case add_Post: 
      let newPost = {
        id: 3,
        text: action.newPostText,
        LikeUp: 0,
      };
      
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ""
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
              profile: {...state.profile, photos: action.photos} as ProfileType 
            }

    default:
      return state;
  }
};

type addPostActionCreatorType = {
  type: typeof add_Post
  newPostText: string
}
export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => (
  { type: add_Post, newPostText})

type setUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({
  type: SET_USER_PROFILE, profile
})

type setStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): setStatusActionType => ({
  type: SET_STATUS, status
})

type savePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS, photos
})

export const getUserProfile = (userId: number) => {
  return async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId)
       dispatch(setUserProfile(response.data))
  }
}

export const getUserStatus = (userId: number) => {
  return async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
      dispatch(setStatus(response.data))
  }
}

export const updateStatus = (status: string) => {
  return async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status)
      if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
  }
}


export const saveProfile = (profile: ProfileType) => {
  return async (dispatch: any, getState: any) => {
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


export const savePhoto = (photoFile: any) => {
  return async (dispatch: any) => {
    let response = await profileAPI.savePhoto(photoFile)
      if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
      }
  }
}

export default postsReducer;
