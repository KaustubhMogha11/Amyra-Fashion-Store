
import "./App.css";

import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
// import ProductListing from "./components/productListing/ProductListing";
import SingleProductPage from "./components/singleProductPage/SingleProductPage";
function App() {
 
  return (
    <>
   {/* <Navbar /> */}
      <div className="main-cont">
      {/* <Homepage/> */}

      {/* <ProductListing/> */}
      <SingleProductPage/>
      </div>
    </>
  );
}

export default App;
