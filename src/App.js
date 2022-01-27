import { BrowserRouter  as  Router , Routes, Route, BrowserRouter} from "react-router-dom";
import "./App.css";
import Contact from "./Comp/Contact";
import Footer from "./Comp/Footer";
import NavbarHeader from "./Comp/Header/NavbarHeader";
import HomeScreen from "./Comp/Homepage/HomeScreen";
import Login from "./Comp/user/Login";
import Register from "./Comp/user/Register";



function App() {
  return (
    <BrowserRouter>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
