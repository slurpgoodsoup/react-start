import { connect } from "react-redux";
import Header from "./Header"
import React from "react"
import { getAuthUserData, logout } from '../../redux/auth.Reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)