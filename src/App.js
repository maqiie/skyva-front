import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Navbar/Login/Login";
import MapComponent from "./components/Maps/MapComponent";

const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/map/*" element={<MapComponent/>}> </Route>
         e */
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
