import axios from "axios";
import { UserType } from '../Types/types';


export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "72badb02-7036-45db-acdb-d8c5cb8ebbee"
    }
})


export enum ResultCodesEnum {
   Success = 0,
   Errors = 1
}
export enum ResultCodesForCaptchaEnum {
   CaptchaIsRequired = 10
}

export type GetItemsType = {
   items: Array<UserType>
   totalCount: number
   error: string | null
 }

export type ResponseType<D = {}, RS = ResultCodesEnum > = {
   data: D
   resultCode: RS
   messages: Array<string>
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
   data: D
   messages: Array<string>
   resultCode: RC
}





