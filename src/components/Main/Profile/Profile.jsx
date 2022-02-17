import style from './Profile.module.css'

const Profile = () => {
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
            <p className={style.profileDesc__el}>Ну да я</p>
            <p className={style.profileDesc__el}>Date of birth: 2 Jan</p>
            <p className={style.profileDesc__el}>City: Moscow</p>
            <p className={style.profileDesc__el}>Education: OAO'22</p>
            <p className={style.profileDesc__el}>WebSite: oao.com</p>
          </div>
        </div>
    )};

    export default Profile;