import * as axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "02e4b56a-7640-4fca-a6e4-e23ca287524b"
    }
})

export const userAPI = {
   getUsers(currentPage, pageSize) {
      return instance.get(`users?=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
   }
}

export const getNavigations = () => {
  return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
  .then(response => response.data)
   
}

export const getProfile = (userId) => {
   return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
   .then(response => response.data)
}


