import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

const store = {
  _state: {
    profilePage: {
      newPostText: "",
      postsData: [
        { id: 0, name: "kotek", text: "oaoa" },
        { id: 1, name: "kotek1", text: "oaoa1" },
      ],
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
    return this._state; // этого нет в редаксе
  },

  dispatch(action) {
    this._state.profilePage = profileReducer (this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action)
    this._callSubscriber(this._state);
  }
}
export default store;
window.state = store;
