import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import App from "./App";
import "./index.css";

import Login from "./pages/login";
import HomeMovie from "./pages/HomeMovie";
import DetailMovie from "./pages/DetailMovie";
import Favorite from "./pages/Favorite";
import Register from "./pages/Register";

axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DetailMovie />
  </React.StrictMode>
);
