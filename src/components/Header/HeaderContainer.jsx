import { connect } from "react-redux";
import Header from "./Header"
import React from "react"
import { getAuthUserData } from '../../redux/auth.Reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
        // authAPI.isAuth().then(response => response.data)
        // .then((data) => {
        //     if (data.resultCode === 0) {
        //         let {email, id, login} = data.data
        //         this.props.setAuthUserData(email, id, login)
        // }
        // })
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)