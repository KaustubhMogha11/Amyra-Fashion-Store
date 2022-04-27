
import "./App.css";

import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import ProductListing from "./components/productListing/ProductListing";
import SingleProductPage from "./components/singleProductPage/SingleProductPage";
import Register from "./components/log-reg/Register";
import Login from "./components/log-reg/Login";
import ForgetPassword from "./components/log-reg/ForgetaPassword";
function App() {
 
  return (
    <>
    <div style={{ height: 'auto', width: 'auto', overflow: 'hidden', position: 'relative' }}>
        <div className="main-cont">
          {/* <Homepage/> */}
          {/* <ProductiListing /> */}
          {/* <SingleProductPage/> */}
          <Login/>
          {/* <Register/>
           */}
           {/* <ForgetPassword/> */}
        </div>
      </div>
    </>
  );
}

export default App;
