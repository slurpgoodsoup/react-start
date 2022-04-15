import {createStore, combineReducers} from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from "./usersReducer"
import authReducer from "./auth.Reducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers)
window.store = store;

export default store;
