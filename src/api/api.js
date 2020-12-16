import * as axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "989ac1f3-ca82-400f-aed1-72d263fa974f"
    }
})

export const userAPI = {
   getUsers(currentPage, pageSize) {
      return instance.get(`users?=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return  instance.delete(`follow/${userId}`)
   },
   getProfile(userId) {
      return instance.get(`profile/` + userId)
   }
}

export const authAPI ={
   getNavigations() {
      return instance.get(`auth/me`)   
    }
}




