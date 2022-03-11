import ProfileInfo from "./Profile/ProfileInfo";
import Posts from './Posts/Posts';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={style.mainContent}>
        <ProfileInfo profileInfoData = {props.state.profileInfoData} />
        <Posts postsData = {props.state.postsData}/>
      </div>
  )
};

export default Profile;
