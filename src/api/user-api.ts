import { instance, GetItemsType, ResponseType } from "./api"



export const userAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get<GetItemsType>(`users?=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
   },
   follow(userId: number) {
      return instance.post<ResponseType>(`follow/${userId}`).then( res => res.data)
   },
   unfollow(userId: number) {
      return  instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
   }
}