import MessagesList from "../MessagesList"
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MessageListContainer = connect (mapStateToProps, mapDispatchToProps)(MessagesList)

export default MessageListContainer