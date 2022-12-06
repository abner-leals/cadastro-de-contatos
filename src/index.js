import React from "react";
import ReactDOM from "react-dom/client";
import { Kabecalho } from "./components/cabecalho";
import { Klientes } from "./components/lista_Cliente";

import { Home } from "./pages";
import Inicio from "./pages/home.page";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Kabecalho />
    <Klientes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
