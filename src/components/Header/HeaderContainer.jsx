import { connect } from "react-redux";
import Header from "./Header"
import React from "react"
import * as axios from "axios"
import {setAuthUserData} from '../../redux/auth.Reducer'
import { authAPI } from "../../api/API";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.isAuth()
        .then((data) => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data
                this.props.setAuthUserData(email, id, login)
        }
        })
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)