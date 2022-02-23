import Profile from "./Profile/Profile";
import Posts from './Posts/Posts';
import style from './Profile.module.css';
const Main = () => {
  return (
    <div className={style.mainContent}>
        <Profile />
        <Posts />
      </div>
  )
};

export default Main;
