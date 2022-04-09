import {createStore, combineReducers} from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersPage from "./usersReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersPage
})

let store = createStore(reducers)
window.store = store;

export default store;
