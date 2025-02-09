import React from "react";
import ReactDOM from "react-dom/client";
import { Massage } from "./example";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="test">
      <Massage author={"user"} txt={"Hello world"} />
      <hr />
      <Massage author={"Igor"} txt={"Hello"} />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
