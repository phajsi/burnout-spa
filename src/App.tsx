import React from "react";
import Home from "./pages/Home";
import Burnout from "./pages/Burnout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="burnout-in-tech" element={<Burnout />}></Route>
        <Route path="burnout-in-tech_scene-1"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
