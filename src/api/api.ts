import axios from "axios";
import { ProfileType } from "../Types/types";



const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "72badb02-7036-45db-acdb-d8c5cb8ebbee"
    }
})

export const userAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get(`users?=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
   },
   follow(userId: number) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId: number) {
      return  instance.delete(`follow/${userId}`)
   }
}

export const profileAPI = {
   getProfile(userId: number) {
      return instance.get(`profile/` + userId)
   },
   getStatus(userId: number) {
      return instance.get(`profile/status/` + userId)
   },
   updateStatus(status: string) {
      return instance.put(`profile/status`, {status: status})
   },
   savePhoto(photoFile: any) {
      const formData = new FormData()
      formData.append("image", photoFile)
      return instance.put(`profile/photo`, formData)
   },
   saveProfile(profile: ProfileType) {
      return instance.put(`profile`, profile)
   }
}

export enum ResultCodesEnum {
   Success = 0,
   Errors = 1
}
export enum ResultCodesForCaptchaEnum {
   CaptchaIsRequired = 10
}

type GetNavigationsType = {
   data: { id: number
           email: string
           login: string 
         }
   resultCode: ResultCodesEnum 
   messages: Array<string>
}

type LoginResponseType = {
   data: { userId: number }
   resultCode: ResultCodesEnum | ResultCodesForCaptchaEnum
   messages: Array<string>
}

type GetCaptchaUrlType = {
  url: string
}

export const authAPI = {
   getNavigations() {
      return instance.get<GetNavigationsType>(`auth/me`).then(res => res.data)  
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
       return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
       .then(res => res.data)
    },
    logout() {
      return instance.delete<LoginResponseType>(`auth/login`).then(res => res.data)
   }
}

export const securityApi = {
   getCaptchaUrl() {
      return instance.get<GetCaptchaUrlType>('security/get-captcha-url').then( res => res.data)
   }
}






