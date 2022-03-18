const ADD_POST = "ADD-POST"  
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


const store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      dialogsData: [
        { id: 0, name: "kotek" },
        { id: 1, name: "piosek" },
        { id: 2, name: "trilobitik" },
        { id: 3, name: "golub" },
        { id: 4, name: "sanek" },
      ],
      newMessageText: "",
      messagesData: [
        { id: 0, name: "kotek", text: "lalala" },
        { id: 1, name: "kotek", text: "lalala1" },
      ],
    },
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },

  dispatch(action) {
      if (action.type == ADD_POST) {
      let newPost = {
        id: 5,
        name: "kotek",
        text: this._state.profilePage.newPostText,
      };
      this._state.profilePage.postsData.push(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostText = "";
    }
    else if (action.type == UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
}
    else if (action.type == SEND_MESSAGE) {
      let newMessage = {
        id: 2,
        name: "kotek",
        text: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._callSubscriber(this._state);
      this._state.dialogsPage.newMessageText = "";
    } 
    else if (action.type == UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
    }
}
}

export const addPostActionCreator = () => ({
      type: ADD_POST
  })
  
 export const updateNewPostTextActionCreator = (newMessageText) => ({
      type: UPDATE_NEW_POST_TEXT,
      newText: newMessageText
  })

export const sendMessageActionCreator = () => ({
      type: SEND_MESSAGE
  })
  
 export const updateNewMessageTextActionCreator = (newMessageText) => ({
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: newMessageText
  })

export default store;
window.state = store;
