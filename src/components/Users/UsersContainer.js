import {connect} from 'react-redux'
import {followToggleUserAC, showMoreAC, setUsersAC} from '../../redux/usersReducer'
import Users from './Users'

let mapStateToProps = (state) => {
    return{
        usersData: state.usersPage.usersData
    }
} 

let mapDispatchToProps = (dispatch) => {
    return{
        followToggle: (userID) =>{
            dispatch(followToggleUserAC(userID))
        },
        showMore: () => {
            dispatch(showMoreAC())
        },
        setUsers: (usersData) => {
          dispatch(setUsersAC(usersData))  
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer