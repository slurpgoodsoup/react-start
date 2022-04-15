import "./App.css";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="main-content">
        <Routes>
          <Route 
          path="/profile/:userId" element={
          <ProfileContainer profilePage = {props.state.profilePage}
          dispatch = {props.dispatch}
           />} />
          <Route path="/dialogs/*" element={<Dialogs state = {props.state.dialogsPage}
          dispatch = {props.dispatch} />} />
          <Route path="/users/*" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

