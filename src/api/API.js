import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "6e4efa3c-5208-45bc-bf1e-de3846990577"}
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 25) => {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`
          ).then(response => response.data)},

    unFollow: (usersID) => {
         return instance.delete(
      `follow/${usersID}`).then(response => response.data)},

    follow: (userID) => {
        return instance.post(
          `follow/${userID}`, {}).then(response => response.data)},
    
    getProfile: (userId) => {
      return instance
      .get(`profile/` + userId)
    }
}

export const authAPI = {
    isAuth: () => { return instance.get(`auth/me`) }
}
