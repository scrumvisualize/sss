import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import "./css/navigation.css";
import "./css/login.css";
import "./css/aboutus.css";
import "./css/home.css";
import "./css/topsection.css";
import "./css/middlesection.css";
import "./css/bottomsection.css";
import "./css/bottomalllevels.css";
import "./css/searchbox.css";
import "./css/requesttojoin.css";
import "./css/footer.css";
import "./css/team.css";
import "./css/playerofmonth.css";
import "./css/contactus.css";
import "./css/videofullsection.css"
import "./css/twitterfeeds.css"
import Navigation from './components/navigation';
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import Team from "./components/team";
import Admin from "./components/admin";
import Login from "./components/login";
import RequestToJoin from "./components/requestToJoin";
import ContactUS from "./components/contactUs";
import { ProtectedRoute } from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
        <Routes>
          <Route path="/"  element={<Home />}>
          </Route>
          <Route path="/aboutUs"  element={<AboutUs />}>
          </Route>
          <Route path="/team" element={<Team />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/requestToJoin" element={<RequestToJoin />}>
          </Route>
          <Route path="/contactUs" element={<ContactUS />}>
          </Route>
          <Route path="/admin" element={
              <ProtectedRoute >
                  <Admin />
              </ProtectedRoute>
              }>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
