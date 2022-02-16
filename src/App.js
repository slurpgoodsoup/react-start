import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
        />
      </header>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__el">
            <a href="#">Profile</a>
          </li>
          <li className="nav-list__el">
            <a href="#">Messages</a>
          </li>
          <li className="nav-list__el">
            <a href="#">News</a>
          </li>
          <li className="nav-list__el">
            <a href="#">Music</a>
          </li>
          <li className="nav-list__el">
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="main-content">
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
        <div className="posts">
          <p className="posts__my-posts">My posts</p>
          <div className="new-post">
            <textarea
              className="new-post__textarea"
              placeholder="Ну че там.."
            ></textarea>
            <button className="new-post__btn">Send</button>
          </div>
          <div className="posts-list">
            <div className="posts-list-el">
              <img
                className="posts-list-el__photo"
                src="https://vjoy.cc/wp-content/uploads/2020/04/50059_19633152-7566413-image-a-56_1570908569851.jpg"
              />
              <p className="posts-list-el__name">Kotya</p>
              <p className="posts-list-el__text">
                Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh Caught in a bad romance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
