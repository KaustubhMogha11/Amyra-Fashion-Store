
import "./App.css";

import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import ProductListing from "./components/productListing/ProductListing";
function App() {
 
  return (
    <>
   {/* <Navbar /> */}
      <div className="main-cont">
      {/* <Homepage/> */}

      <ProductListing/>
      </div>
    </>
  );
}

export default App;
