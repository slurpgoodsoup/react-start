import { usersAPI, profileAPI } from "../api/API"
const ADD_POST = "ADD-POST"  
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

let initialState = {
        newPostText: "",
        postsData: [
          { id: 0, name: "kotek", text: "oaoa" },
          { id: 1, name: "kotek1", text: "oaoa1" },
        ],
        profile: null,
        status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
            id: 2,
            name: "kotek",
            text: action.text,
            };
            return {...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return{
                ...state,
                status: action.status
            }
        }
        default: 
            return state;
    }
}
export const addPostActionCreator = (text) => ({
    type: ADD_POST,
    text
})

export const updateNewPostTextActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newMessageText
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
      });
} 
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => { 
        // приходит в респонсе объект
        if (response.data.resultCode === 0)
        {
            dispatch(setStatus(response.statusText))
        }
    })
}

export default profileReducer;