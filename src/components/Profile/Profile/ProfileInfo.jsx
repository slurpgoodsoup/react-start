import Preloader from '../../Preloader/Preloader'
import style from './ProfileInfo.module.css'
import Status from './Status/Status';

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader />
  } else
    return (
    <div className={style.pfofile}>
          <img
            className={style.profile__bgImg}
            src="https://funart.pro/uploads/posts/2021-07/1625692181_22-funart-pro-p-kotik-laik-zhivotnie-krasivo-foto-46.jpg"
          />
          <img
            className={style.profile__photo}
            src={props.profile.photos.large}
          />

          <div className={style.profileDesc}>
            <p className={style.profileDesc__el}>{props.profile.fullName}</p>
            <Status status = {props.status} updateStatus = {props.updateStatus} />
            <p className={style.profileDesc__el}>Обо мне: {props.profile.aboutMe}</p>
            <p className={style.profileDesc__el}>В поисках работы: {props.profile.lookingForAJob ? `да, ${props.profile.lookingForAJobDescription}` : "нет"}</p>
            <p className={style.profileDesc__el}>- Соцсети -</p>
            <p className={style.profileDesc__el}>{props.profile.contacts.facebook ? `Facebook: ${props.profile.contacts.facebook}` : ""
            }</p>
            <p className={style.profileDesc__el}>{props.profile.contacts.website ? `Вебсайт: ${props.profile.contacts.website}` : ""
            }</p>
            <p className={style.profileDesc__el}>{props.profile.contacts.vk ? `VK: ${props.profile.contacts.vk}` : ""
            }</p>
            <p className={style.profileDesc__el}>{props.profile.contacts.twitter ? `Twitter: ${props.profile.contacts.twitter}` : ""
            }</p>
            <p className={style.profileDesc__el}>{props.profile.contacts.instagram ? `Instagram: ${props.profile.contacts.instagram}` : ""
            }</p>
            <p className={style.profileDesc__el}>{props.profile.contacts.youtube ? `YouTube: ${props.profile.contacts.youtube}` : ""
            }</p>
            <p className={style.profileDesc__el}>{props.profile.contacts.github ? `GitHub: ${props.profile.contacts.github}` : ""
            }</p>
            <p className={style.profileDesc__el}>{props.profile.contacts.mainLink ? `Другое: ${props.profile.contacts.mainLink}` : ""
            }</p>
          </div>
        </div>
    )};

    export default ProfileInfo;