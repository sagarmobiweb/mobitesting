import React from "react";
import { hydrate, render } from "react-dom";
import  ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}