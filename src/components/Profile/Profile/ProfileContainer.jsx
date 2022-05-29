import { connect } from "react-redux";
import React from "react";
import Profile from "../Profile";
import { setUserProfile, getUserProfile } from "../../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setAuthUserData } from "../../../redux/auth.Reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.yourId;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} getUserProfile = {getUserProfile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    profilePage: state.profilePage,
    yourId: state.auth.id,
    yourEmail: state.auth.email
  };
};

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
  setUserProfile, setAuthUserData, getUserProfile
})(withRouter(ProfileContainer));
