/* eslint-disable no-unused-vars */
import "./style.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
