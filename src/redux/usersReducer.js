import { usersAPI } from "../api/API";
const FOLLOW_TOGGLE = "FOLLOW-TOGGLE";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case SHOW_MORE:
    case SET_USERS:
      return { ...state, usersData: action.usersData };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : [...state.followingInProgress.filter((id) => id != action.userID)],
      };
    default:
      return state;
  }
};

export const followToggleUser = (userID) => ({
  type: FOLLOW_TOGGLE,
  userID: userID,
});
export const showMore = () => ({
  type: SHOW_MORE,
});
export const setUsers = (usersData) => ({
  type: SET_USERS,
  usersData,
});
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingInProgress = (isFetching, userID) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userID,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const toggleFollow = (u, toggle) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, u.id));
  let toggleFol
  (toggle) ? toggleFol = usersAPI.follow(u.id) : toggleFol = usersAPI.unFollow(u.id)
  toggleFol.then((data) => {
    if (data.resultCode == 0) {
      dispatch(followToggleUser(u.id));
    }
    dispatch(toggleFollowingInProgress(false, u.id));
  });
};

export default usersReducer;
