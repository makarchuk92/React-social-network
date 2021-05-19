import { instance, GetItemsType, ResponseType } from "./api"



export const userAPI = {
   getUsers(currentPage: number, pageSize: number, term: string = '') {
      return instance.get<GetItemsType>(`users?=${currentPage}&count=${pageSize}&term=${term}`)
      .then(res => res.data)
   },
   follow(userId: number) {
      return instance.post<ResponseType>(`follow/${userId}`).then( res => res.data)
   },
   unfollow(userId: number) {
      return  instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
   }
}