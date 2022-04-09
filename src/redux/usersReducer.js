const FOLLOW_TOGGLE = "FOLLOW-TOGGLE";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";

let initialState = {
  usersData: [

  ],
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
      return { ...state, usersData: [...state.usersData, ...action.usersData] };
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

export default usersReducer;
