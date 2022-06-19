import ProfileInfo from "./Profile/ProfileInfo";
import Posts from './Posts/Posts';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={style.mainContent}>
        <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
        <Posts profilePage = {props.profilePage} dispatch = {props.dispatch}/>
      </div>
  )
};

export default Profile;
