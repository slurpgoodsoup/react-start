import React from "react";
import * as axios from "axios";
import style from "./Users.module.css";
import noNamePhoto from "../../img/gtS0nPGhg4E.jpg";
class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    let curP = this.props.currentPage;
    let curPF = curP - 5 < 0 ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
      <div>
        {slicedPages.map((page) => {
          return (
            <span
              className={`${style.users_list_toggler} ${
                this.props.currentPage === page && style.users_item__ACTIVE
              }`}
              onClick={() => {
                this.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
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
              <p className={style.user__text_text}>{u.status == null ? ". . ." : u.status}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
