import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Mac from "./pages/Mac"
import Ipad from "./pages/Ipad"

function App() {
  return (
    <>
      <Routes>
        <Route path="/스토어" element={<Store />} />
        <Route path="/Mac" element={<Mac/>} />
        <Route path="/iPad" element={<Ipad/>} />
      </Routes>
      <Home />
    </>

  );
}

export default App;
