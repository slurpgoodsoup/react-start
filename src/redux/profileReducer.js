const ADD_POST = "ADD-POST"  
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
        newPostText: "",
        postsData: [
          { id: 0, name: "kotek", text: "oaoa" },
          { id: 1, name: "kotek1", text: "oaoa1" },
        ],
        profileInfoData: {
          id: 0,
          name: "ну да я",
          dateOfBirth: "2 Jan",
          city: "Moscow",
          education: "OAO'22",
          webSite: "aoa.com",
        },
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
            id: 5,
            name: "kotek",
            text: state.newPostText,
            };
            return {...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: 
            return state;
    }
}
export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newMessageText
})

export default profileReducer;