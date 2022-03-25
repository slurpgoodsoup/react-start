import {connect} from 'react-redux'
import NewMessage from "./NewMessage";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/dialogsReducer'

let mapStateToProps = (state) => {
  return {
  currentText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator())},
    onMessageChange: (newMessageText) => {
      dispatch(updateNewMessageTextActionCreator(newMessageText))
    }  
  }
}

const newMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)



export default newMessageContainer;
