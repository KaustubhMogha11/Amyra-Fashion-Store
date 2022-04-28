import React, { useState } from "react";
import StarRate from "../cards/ratedCard/StarRate";
import Insta from "../instagram/Insta";
import Footer from "../footer/Footer";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";
import "./singlepage.css";
const SingleProductPage = () => {
  const [imgShow, setImgShow] = useState("images/singlepage/image1.jpg");
  const [isReview, setIsReview] = useState(false);
  return (
    <>
      <div className="single-product-sec-cont">
        <div className="single-product-cont">
          <div className="single-product-img-sec">
            <div className="img-sec-small">
              <div className="smallimg-item">
                <img
                  src="images/singlepage/image1.jpg"
                  onClick={() => setImgShow("images/singlepage/image1.jpg")}
                  alt="item"
                />
              </div>
              <div className="smallimg-item">
                <img
                  src="images/singlepage/subimage1.jpg"
                  onClick={() => setImgShow("images/singlepage/subimage1.jpg")}
                  alt="item"
                />
              </div>
              <div className="smallimg-item">
                <img
                  src="images/singlepage/subimage2.jpg"
                  onClick={() => setImgShow("images/singlepage/subimage2.jpg")}
                  alt="item"
                />
              </div>
              <div className="smallimg-item">
                <img
                  src="images/singlepage/subimage3.jpg"
                  onClick={() => setImgShow("images/singlepage/subimage3.jpg")}
                  alt="item"
                />
              </div>
            </div>
            <div className="img-sec-main-img">
              <img src={imgShow} alt="main" />
             
            </div>
          </div>
          <div className="single-product-description">
            <div className="go-back">
              <img src="images/fill-right-arrow.png" alt="arrow" />
              BACK
            </div>
            <StarRate />
            <div className="product-name">
              FAME AND PARTNERS TALL VALENCIA MAXI DRESS
            </div>
            <div className="product-price">
              <span>₹500</span>
              ₹400
            </div>
            <p className="product-des">
              With an eye to the catwalks, Fame and Partners Tall apply their
              cool and individual style to a collection of hand-curated designs,
              exclusively for ASOS.
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
            Clothing, Women's Dresses
          </div>
          <div className="products-cat">
            <span>Tags:</span>
            dress, green
          </div>
        </div>
        <div className="review-additionInfo-cont">
          <span onClick={() => setIsReview(false)}>ADDITIONAL INFORMATION</span>
          <span onClick={() => setIsReview(true)}>reviews</span>
        </div>
        {!isReview ? (
          <AdditionalInfo />
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
        <Insta />
        <Footer />
      </div>
    </>
  );
};

export default SingleProductPage;