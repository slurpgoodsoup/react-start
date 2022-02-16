const Profile = () => {
    return (
    <div className="profile">
          <img
            className="profile__bg-img"
            src="https://i.ytimg.com/vi/Zr-qM5Vrd0g/maxresdefault.jpg"
          />
          <img
            className="profile__photo"
            src="https://i.ytimg.com/vi/HQfC7IFiQxA/maxresdefault.jpg"
          />

          <div className="profile-desc">
            <p className="profile-desc__el">Ну да я</p>
            <p className="profile-desc__el">Date of birth: 2 Jan</p>
            <p className="profile-desc__el">City: Moscow</p>
            <p className="profile-desc__el">Education: OAO'22</p>
            <p className="profile-desc__el">WebSite: oao.com</p>
          </div>
        </div>
    )};

    export default Profile;