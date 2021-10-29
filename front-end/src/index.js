import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Login from "./components/Login";
import InitialView from "./components/InitialView";


ReactDOM.render(
  <React.StrictMode>
    <InitialView />
  </React.StrictMode>,
  document.getElementById("root")
)
