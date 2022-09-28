import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Components/Edit";
import Home from "./Components/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
