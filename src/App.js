
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Navbar/Login/Login";
import MapComponent from "./components/Maps/MapComponent";
import AboutUs from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Producst from "./components/Products/Producst";
import Admin from "./components/Admin/Admin";
import Contact from "./components/About/Contact";
import ChatComponent from "./components/Chat/ChatComponent";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<MapComponent />} /> 
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path ='/cart/:id?' element= {<Cart />} />
          <Route path='/product' element={<Producst />}/>
          <Route path="/admin" element={<Admin/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<ChatComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
