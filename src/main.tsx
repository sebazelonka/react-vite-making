import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { App } from "./routes/home";
import { About } from "./routes/about";

const Global = createGlobalStyle`
  body {
    padding: 10px;
    font-family: sans-serif
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <Global />
    <React.StrictMode>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
