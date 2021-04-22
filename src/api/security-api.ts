import { instance } from "./api"


type GetCaptchaUrlType = {
   url: string
 }
 
 
 
 export const securityApi = {
    getCaptchaUrl() {
       return instance.get<GetCaptchaUrlType>('security/get-captcha-url').then( res => res.data)
    }
 }