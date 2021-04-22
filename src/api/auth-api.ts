import { instance, ResponseType, ResultCodesEnum, ResultCodesForCaptchaEnum } from './api';



type GetResponseDataType = {
   id: number
   email: string
   login: string 
}

type LoginResponseType = {
   data: { userId: number }
   resultCode: ResultCodesEnum | ResultCodesForCaptchaEnum
   messages: Array<string>
}

export const authAPI = {
   getNavigations() {
      return instance.get<ResponseType<GetResponseDataType>>(`auth/me`).then(res => res.data)  
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
       return instance.post<ResponseType<LoginResponseType, ResultCodesEnum | ResultCodesForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
       .then(res => res.data)
    },
    logout() {
      return instance.delete(`auth/login`).then(res => res.data)
   }
}