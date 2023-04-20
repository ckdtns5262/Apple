import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (

    <div>
   {/* header */}
    <Navbar/>
   {/* content */}
    <Content/>
   {/* footer */}
   <Footer/>
    </div>

  );
}

export default App;
