import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore: no declaration file for './pages/App.jsx'
import App from "./pages/App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
