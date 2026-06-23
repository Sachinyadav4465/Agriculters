import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/CustomNavbar";
import Home from "./Pages/HomePages"
import Footer from "./Component/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import WhatsAppButton from "./Component/Whatasppicon";
import AboutUs from "./Pages/AboutUs";
import ServicePages from "./Pages/ServicesPages"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/services" element={<ServicePages/>}/>
        
  
      </Routes>
      <WhatsAppButton/>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;