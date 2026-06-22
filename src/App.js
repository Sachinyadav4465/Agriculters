import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/CustomNavbar";
import Home from "./Pages/HomePages"
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
  
      </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;