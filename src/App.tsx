import React from "react";
import {useRoutes} from "react-router-dom";
import "./assets/styles/index.scss";
import {routes} from "./routes";


export default function App() {
  return useRoutes(routes)
}
