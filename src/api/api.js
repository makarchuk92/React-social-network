import * as axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "3cb01f78-278b-42d1-9f79-510101115246"
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
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId)
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId)
   },
   updateStatus(status) {
      return instance.put(`profile/status`, {status: status})
   },
   savePhoto(photoFile) {
      const formData = new FormData()
      formData.append("image", photoFile)
      return instance.put(`profile/photo`, formData)
   },
   saveProfile(profile) {
      return instance.put(`profile`, profile)
   }
}

export const authAPI ={
   getNavigations() {
      return instance.get(`auth/me`)   
    },
    login(email, password, rememberMe = false) {
       return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
      return instance.delete(`auth/login`)
   }
}






