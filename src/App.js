import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hompage from "./pages/Hompage";
import About from "./pages/About";
import Career from "./pages/Career";
import Faq from "./pages/Faq";
import BuyProduct from "./pages/BuyProduct";
import Login from "./component/Login";
import NavbarAdmin from "./component/NavbarAdmin";
import NavbarAll from "./component/NavbarAll";
import NavbarUser from "./component/NavbarUser";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Hompage/>}/>
        <Route path="/buy-product" element={<BuyProduct/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/navbar-admin" element={<NavbarAdmin/>}/>
        <Route path="/navbar" element={<NavbarAll/>}/>
        <Route path="/navbar-user" element={<NavbarUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
