import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hompage from "./pages/Hompage";
import About from "./pages/About";
import Career from "./pages/Career";
import Faq from "./pages/Faq";
import BuyProduct from "./pages/BuyProduct";
import Login from "./component/Login";

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
      </Routes>
    </Router>
  );
}

export default App;
