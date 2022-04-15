import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import Profile from "../Profile";
import {setUserProfile} from '../../../redux/profileReducer';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {

      let userId = this.props.router.params.userId;


    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/`+ userId
      )
      .then((response) => {
        this.props.setUserProfile(response.data)
      });
  }
  
  render() {
    return <Profile {...this.props} profile = {this.props.profile}/>;
  }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
    }
};

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}









export default connect(mapStateToProps, {
    setUserProfile
})(withRouter(ProfileContainer));