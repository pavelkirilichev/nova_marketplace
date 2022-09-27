import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthSideBar from "./routes/AuthSideBar";
import Home from "./routes/Home";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/polly" element={<AuthSideBar />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
