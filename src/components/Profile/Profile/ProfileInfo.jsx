import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  console.log(props)
    return (
    <div className={style.pfofile}>
          <img
            className={style.profile__bgImg}
            src="https://i.ytimg.com/vi/Zr-qM5Vrd0g/maxresdefault.jpg"
          />
          <img
            className={style.profile__photo}
            src="https://i.ytimg.com/vi/HQfC7IFiQxA/maxresdefault.jpg"
          />

          <div className={style.profileDesc}>
            <p className={style.profileDesc__el}>{props.profileInfoData.name}</p>
            <p className={style.profileDesc__el}>Date of birth: {props.profileInfoData.dateOfBirth}</p>
            <p className={style.profileDesc__el}>City: {props.profileInfoData.city}</p>
            <p className={style.profileDesc__el}>Education: {props.profileInfoData.education}</p>
            <p className={style.profileDesc__el}>WebSite: {props.profileInfoData.webSite}</p>
          </div>
        </div>
    )};

    export default ProfileInfo;