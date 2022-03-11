import ProfileInfo from "./Profile/ProfileInfo";
import Posts from './Posts/Posts';
import style from './Profile.module.css';

const Profile = (props) => {
  console.log(props);
  return (
    <div className={style.mainContent}>
        <ProfileInfo profileInfoData = {props.profileInfoData} />
        <Posts postsData = {props.postsData}/>
      </div>
  )
};

export default Profile;
