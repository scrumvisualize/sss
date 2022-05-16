import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import "./css/navigation.css";
import "./css/aboutus.css";
import "./css/home.css";
import "./css/topsection.css";
import "./css/middlesection.css";
import "./css/bottomsection.css";
import "./css/bottomalllevels.css";
import "./css/footer.css";
import Navigation from './components/navigation';
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import Team from "./components/team";

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
        </Routes>
    </BrowserRouter>
  );
}
export default App;
