import { connect } from "react-redux";
import React from "react";
import Profile from "../Profile";
import { getUserProfile } from "../../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setAuthUserData } from "../../../redux/auth.Reducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getStatus, updateStatus } from "../../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.yourId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        getUserProfile={getUserProfile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    profilePage: state.profilePage,
    yourId: state.auth.id,
    yourEmail: state.auth.email,
    status: state.profilePage.status,
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
const AuthRedirectComponent = compose(
  connect(mapStateToProps, {
    setAuthUserData,
    getUserProfile,
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

export default AuthRedirectComponent;
