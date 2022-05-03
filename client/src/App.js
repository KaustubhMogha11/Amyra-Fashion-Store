
import "./App.css";

import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import ProductListing from "./components/productListing/ProductListing";
import SingleProductPage from "./components/singleProductPage/SingleProductPage";
import Register from "./components/log-reg/Register";
import Login from "./components/log-reg/Login";
import ForgetPassword from "./components/log-reg/ForgetaPassword";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Cart from "./components/cart/Cart";
import WishList from "./components/wishlist/WishList";
import Error404 from "./components/404errorpage/Error404";
import ContactUs from './components/contact/ContactUs'
function App() {
 
  return (
    <>
    <Router>
    <Navbar />
    <div style={{ height: 'auto', width: 'auto', overflow: 'hidden', position: 'relative' }}>
        <div className="main-cont">
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<ProductListing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/wishlist" element={<WishList/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/contact-us" element={<ContactUs/>} />
            <Route exact path="/forget-password" element={<ForgetPassword />} />
            <Route exact path="/product/:id" element={<SingleProductPage />} />
            <Route path="*" element={<Error404/>} />
          </Routes>
        </div>
      </div>
      </Router>
    </>
  );
}

export default App;
