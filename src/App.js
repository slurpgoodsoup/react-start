import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/profile" element={<Profile postsData={postsData} profileInfoData = {profileInfoData} />} />
          <Route path="/dialogs/*" element={<Dialogs dialogDsata = {dialogDsata} messagesData = {messagesData}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

const postsData = [
  { id: 0, name: "kotek", text: "oaoa" },
  { id: 1, name: "kotek1", text: "oaoa1" },
  { id: 2, name: "kotek2", text: "oaoa2" },
  { id: 3, name: "kotek3", text: "oaoa3" },
  { id: 3, name: "kotek3", text: "oaoa3" },
  { id: 4, name: "kotek4", text: "oaoa4" },
];

const dialogDsata = [
  {id: 0, name: "kotek"},
  {id: 1, name: "piosek"},
  {id: 2, name: "trilobitik"},
  {id: 3, name: "golub"},
  {id: 4, name: "sanek"},
];
const messagesData = [
  {id: 0, name: "kotek", text: "lalala"},
  {id: 1, name: "kotek", text: "lalala1"},
  {id: 2, name: "kotek", text: "lalala2"},
  {id: 3, name: "kotek", text: "lalala3"}
];

const profileInfoData =
  {id: 0, name: "ну да я", dateOfBirth: "2 Jan", city: "Moscow", education: "OAO'22", webSite: "aoa.com"};