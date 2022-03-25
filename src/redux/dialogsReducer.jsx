const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
    case SEND_MESSAGE:
        let newMessage = {
          id: 2,
          name: "kotek",
          text: state.newMessageText,
        };
        let stateCopy = {...state}
        stateCopy.messagesData = [...state.messagesData]
        stateCopy.messagesData.push(newMessage);
        stateCopy.newMessageText = "";
        return stateCopy;
    case UPDATE_NEW_MESSAGE_TEXT: {
        let stateCopy = {...state}
        stateCopy.newMessageText = action.newText;
        return stateCopy;}
    default: 
        return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageTextActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newMessageText
})

export default dialogsReducer;