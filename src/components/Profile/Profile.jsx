import ProfileInfo from "./Profile/ProfileInfo";
import Posts from './Posts/Posts';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={style.mainContent}>
        <ProfileInfo profileInfoData = {props.profilePage.profileInfoData} profile = {props.profile}/>
        <Posts profilePage = {props.profilePage} dispatch = {props.dispatch}/>
      </div>
  )
};

export default Profile;
