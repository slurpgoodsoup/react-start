import "./App.css";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path = "/profile" element ={<Profile />} />
          <Route path = "/dialogs" element ={<Dialogs />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default App;
