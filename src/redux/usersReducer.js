const FOLLOW_TOGGLE = "FOLLOW-TOGGLE";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

let initialState = {
  usersData: [

  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
      return {...state, currentPage: action.pageNumber};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount};
    default:
      return state;
  }
};

export const followToggleUserAC = (userID) => ({
  type: FOLLOW_TOGGLE,
  userID: userID,
});
export const showMoreAC = () => ({
  type: SHOW_MORE,
});
export const setUsersAC = (usersData) => ({
  type: SET_USERS,
  usersData,
});
export const setCurrentPageAC = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber
});
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
});

export default usersReducer;
