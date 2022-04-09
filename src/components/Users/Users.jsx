import React from "react";
import * as axios from "axios";
import style from "./Users.module.css";
import noNamePhoto from "../../img/gtS0nPGhg4E.jpg";
class Users extends React.Component {
  getUsers = () => {
    if (this.props.usersData.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };
  render() {
    return <div>
      <button onClick={this.getUsers}>GetUsers</button>
      {this.props.usersData.map((u) => (
        <div className={style.user} key={u.id}>
          <div className={style.user__img_btn}>
            <img
              className={style.user__img}
              src={u.photos.small != null ? u.photos.small : noNamePhoto}
              alt="user's photo"
            />

            {u.followed ? (
              <button
                className={style.user__btn}
                onClick={() => this.props.followToggle(u.id)}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={style.user__btn}
                onClick={() => this.props.followToggle(u.id)}
              >
                Follow
              </button>
            )}
          </div>
          <div className={style.user__text}>
            <p className={style.user__text_name}>{u.name}</p>
            <p className={style.user__text_domicile}>u.domicile</p>
            <p className={style.user__text_text}>u.text</p>
          </div>
        </div>
      ))}
    </div>
            }
};

export default Users;
