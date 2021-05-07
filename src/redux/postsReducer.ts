import { stopSubmit } from "redux-form";
import { PhotosType, PostDataType, ProfileType } from "../Types/types";
import { profileAPI } from "../api/profile-api";
import { InferActionsTypes, BaseThunkType } from "./redux-store";




let initialState =  {
  postData: [
    { id: 1, text: "I am Andrew and my profession It", LikeUp: 12 },
  ] as Array<PostDataType>,
  profile: null as ProfileType | null,
  status: "",
}

export type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>

const postsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case 'POSTS/ADD-POST': 
      let newPost = {
        id: 3,
        text: action.newPostText,
        LikeUp: 0,
      };
      
      return {
        ...state,
        postData: [...state.postData, newPost],
      }

      case 'POSTS/SET_USER_PROFILE' :
        return {
          ...state,
          profile: action.profile
        }

        case 'POSTS/SET_STATUS':
          return {
            ...state,
            status: action.status
          }

          case 'POSTS/SAVE_PHOTO_SUCCESS':
            return {
              ...state,
              profile: {...state.profile, photos: action.photos} as ProfileType 
            }

    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newPostText: string) => ({ type: 'POSTS/ADD-POST', newPostText} as const),
  setUserProfile: (profile: ProfileType) => ({ type: 'POSTS/SET_USER_PROFILE', profile } as const),
  setStatus: (status: string) => ({ type: 'POSTS/SET_STATUS', status } as const),
  savePhotoSuccess: (photos: PhotosType) => ({ type: 'POSTS/SAVE_PHOTO_SUCCESS', photos } as const)
}



export const getUserProfile = (userId: number): ThunkType => {
  return async (dispatch, getState) => {
    let data = await profileAPI.getProfile(userId)
       dispatch(actions.setUserProfile(data))
  }
}

export const getUserStatus = (userId: number): ThunkType => {
  return async (dispatch, getState) => {
    let data = await profileAPI.getStatus(userId)
      dispatch(actions.setStatus(data))
  }
}

export const updateStatus = (status: string): ThunkType => {
  return async (dispatch, getState) => {
    let data = await profileAPI.updateStatus(status)
      if(data.resultCode === 0) {
        dispatch(actions.setStatus(status))
      }
  }
}


export const saveProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
      if(data.resultCode === 0) {
        if( userId != null) {
          dispatch(getUserProfile(userId))
        } else {
          throw new Error('userId can`t be null')
        }
       
      } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
      }
  }
}


export const savePhoto = (photoFile: File ): ThunkType => {
  return async (dispatch, getState) => {
    let data = await profileAPI.savePhoto(photoFile)
      if(data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
      }
  }
}

export default postsReducer;
