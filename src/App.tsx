import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import HomeMovie from "./pages/HomeMovie";
import DetailMovie from "./pages/DetailMovie";
import Login from "./pages/login";
import Register from "./pages/Register";
import Favorite from "./pages/Favorite";

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/home/:username" element={<Home />} /> */}
          <Route path="/homemovie" element={<HomeMovie />} />
          <Route path="/DetailMovie/:name" element={<DetailMovie />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
