import {connect} from 'react-redux'
import {followToggleUserAC, showMoreAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../redux/usersReducer'
import Users from './Users'

let mapStateToProps = (state) => {
    return{
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (pageNumber) => {
            dispatch(setTotalUsersCountAC(pageNumber))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer