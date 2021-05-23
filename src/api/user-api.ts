import { instance, GetItemsType, ResponseType } from "./api"



export const userAPI = {
   getUsers(currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null) {
      return instance.get<GetItemsType>(`users?=${currentPage}&count=${pageSize}&term=${term}` + 
      (friend === null ? '' : `&friend=${friend}`))
      .then(res => res.data)
   },
   follow(userId: number) {
      return instance.post<ResponseType>(`follow/${userId}`).then( res => res.data)
   },
   unfollow(userId: number) {
      return  instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
   }
}