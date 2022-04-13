import style from "./Users.module.css";
import noNamePhoto from "../../img/gtS0nPGhg4E.jpg";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);
  return (
    <div>
      {slicedPages.map((page) => {
        return (
          <span
            className={`${style.users_list_toggler} ${
              props.currentPage === page && style.users_item__ACTIVE
            }`}
            onClick={() => {
              props.onPageChanged(page);
            }}
          >
            {page}
          </span>
        );
      })}
      {props.usersData.map((u) => (
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
                onClick={() => props.followToggleUser(u.id)}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={style.user__btn}
                onClick={() => props.followToggleUser(u.id)}
              >
                Follow
              </button>
            )}
          </div>
          <div className={style.user__text}>
            <p className={style.user__text_name}>{u.name}</p>
            <p className={style.user__text_domicile}>u.domicile</p>
            <p className={style.user__text_text}>
              {u.status == null ? ". . ." : u.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
