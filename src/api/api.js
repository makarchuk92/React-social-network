import * as axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "72badb02-7036-45db-acdb-d8c5cb8ebbee"
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

export const authAPI = {
   getNavigations() {
      return instance.get(`auth/me`)   
    },
    login(email, password, rememberMe = false, captcha) {
       return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
      return instance.delete(`auth/login`)
   }
}

export const securityApi = {
   getCaptchaUrl() {
      return instance.get('security/get-captcha-url')
   }
}






