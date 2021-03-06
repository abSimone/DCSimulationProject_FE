import React from "react";
import logo from "./logo.svg";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dettaglio from "./Pages/Dettaglio/Dettaglio";
import Lista from "./Pages/Lista/Lista";
import Layout from "./Layout/Layout";

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
    name: "Home",
  },
  {
    path: "/lista",
    exact: true,
    main: () => <Lista />,
    name: "Lista",
  },
];

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dettaglio/:id" element={<Dettaglio />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/aggiungi" element={<Dettaglio />} />
          </Routes>
        </Layout>
      </Router>
    );
  }
}
