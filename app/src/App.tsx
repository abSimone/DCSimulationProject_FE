import React from "react";
import logo from "./logo.svg";
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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dettaglio/:id" element={<Dettaglio />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
