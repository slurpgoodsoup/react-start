import { authAPI } from "../api/API";
const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: 23303,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }

        default:
            return state
    }
}
export const setAuthUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA, data: {email, id, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.isAuth().then(response => response.data)
        .then((data) => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data
                dispatch(setAuthUserData(email, id, login, true))
        }
        })
}
export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
    .then (response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}
export const logout = () => (dispatch) => {
    authAPI.logout()
    .then (response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}
export default authReducer