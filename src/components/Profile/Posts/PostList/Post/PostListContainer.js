import PostList from "../PostList"
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return{
    profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{}
}

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer