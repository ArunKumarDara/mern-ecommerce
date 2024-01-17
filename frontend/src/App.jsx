import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/products" element={<Product />}>
            <Route path=":productId" element={Product} />
          </Route>
          <Route path="/login" element={<LoginSignup type="login" />} />
          <Route path="/signup" element={<LoginSignup type="signup" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
