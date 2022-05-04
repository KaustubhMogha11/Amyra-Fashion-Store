import React, { useState,useEffect } from "react";
import StarRate from "../cards/ratedCard/StarRate";
import Insta from "../instagram/Insta";
import Footer from "../footer/Footer";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";
import "./singlepage.css";
import { useParams,Link } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/productActions';

const SingleProductPage = (match) => {

  const {id}=useParams();
  console.log(id);
  const [isReview, setIsReview] = useState(false);
  // const [isfilter,setIsfilter] = useState("")

  const productDetails = useSelector(state => state.getProductDetails);
  const { loading, product} = productDetails;

  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log(product)
           
          dispatch(getProductDetails(id));
           
  }, [dispatch]);
   
  
      
  const [imgShow, setImgShow] = useState('');
  return (
    <>
    
    {
      !loading && !product?
      (
        <>
        <div className="error-sec">
          <img src="https://c.tenor.com/51cJwccNPl4AAAAi/capoo-bugcat.gif" alt="load" /> 
          <span>Sorry we got some Error. Please go back</span>
          </div>
        </>
      )
      :(<>
      <div className="single-product-sec-cont">
        <div className="single-product-cont">
          <div className="single-product-img-sec">
            <div className="img-sec-small">
              <div className="smallimg-item">
                <img
                  src={product?.imgOne}
                  onClick={() => setImgShow(product?.imgOne)}
                  alt="item"
                />
              </div>
              <div className="smallimg-item">
                <img
                  src={product?.imgTwo}
                  onClick={() => setImgShow(product?.imgTwo)}
                  alt="item"
                />
              </div>
              <div className="smallimg-item">
                <img
                 src={product?.imgThree}
                  onClick={() => setImgShow(product?.imgThree)}
                  alt="item"
                />
              </div>
              <div className="smallimg-item">
                <img
                   src={product?.imgFour}
                  onClick={() => setImgShow(product?.imgFour)}
                  alt="item"
                />
              </div>
            </div>
            <div className="img-sec-main-img">
            <img src={ imgShow?.length<1?product?.imgOne:imgShow} alt="main" />
             
            </div>
          </div>
          <div className="single-product-description">
            <div className="go-back">
            <Link to='/shop' className="go-back">
              <img src="/images/fill-right-arrow.png" alt="arrow" />
              BACK
            </Link>
            </div>
            <StarRate />
            <div className="product-name">
            {product?.title}
            </div>
            <div className="product-price">
            <span>₹10000</span>
              ₹{product?.price}
            </div>
            <p className="product-des">
             {product?.description}
             {!product?.stock?<span className="outOfStockTextShow">Out of stock</span>:null}
            </p>
            <div className="product-card-btn-cont">
              <input type="text" placeholder="1" />
              <span>add to cart</span>
            </div>
            <div className="add-to-wishlist">
              <img src="images/like.png" alt="heart" />
              add to wishlist
            </div>
          </div>
        </div>
        <div className="product-tags">
          <div className="products-cat">
            <span>Categories:</span>
            {product?.categoryName}
          </div>
          <div className="products-cat">
            <span>Tags:</span>
            {product?.tags}
          </div>
        </div>
        <div className="review-additionInfo-cont">
          <span onClick={() => setIsReview(false)}>ADDITIONAL INFORMATION</span>
          <span onClick={() => setIsReview(true)}>reviews</span>
        </div>
        {!isReview ? (
          <AdditionalInfo size={product?.size}/>
        ) : (
          <div className="review-sec">
            <div className="show-review-sec">
              <div className="review-count">2 reviews</div>
              <Review />
              <Review />
              <Review />
            </div>
            <div className="submit-review">
              <div className="review-count">add a review</div>
              <div className="submit-review-des">
                Your email address will not be published. Required fields are
                marked <span>*</span>
              </div>
              <div className="review-input-cont">
                <div className="mini-heading">
                  your rating <span>*</span>
                </div>
                <textarea id="input-review"></textarea>
              </div>
              <div className="review-name-email">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <span className="review-submit-btn">Submit</span>
            </div>
          </div>
        )}
        <Insta/>
        <Footer/>
      </div>
       </>)
    }
  
    </>
  );
};

export default SingleProductPage;