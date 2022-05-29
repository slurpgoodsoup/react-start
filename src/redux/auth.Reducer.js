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
                ...state, ...action.data, isAuth: true
            }

        default:
            return state
    }
}
export const setAuthUserData = (email, id, login) => ({type: SET_USER_DATA, data: {email, id, login}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.isAuth().then(response => response.data)
        .then((data) => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data
                dispatch(setAuthUserData(email, id, login))
        }
        })
}
export default authReducer