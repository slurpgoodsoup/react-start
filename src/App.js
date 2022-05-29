import "./App.css";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from '../src/components/Login/Login'

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="main-content">
        <Routes>
          <Route 
          path="/profile/:userId" element={
          <ProfileContainer
           />} />
          <Route 
          path="/profile/" element={
          <ProfileContainer
           />} />
          <Route path="/dialogs/*" element={<Dialogs state = {props.state.dialogsPage}
          dispatch = {props.dispatch} />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

