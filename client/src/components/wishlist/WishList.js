import React,{useEffect,useState} from 'react'
import './wishlist.css'
import Insta from '../instagram/Insta'
import Footer from '../footer/Footer'
import WishListCard from '../cards/wishlistCard/WishListCard'
import { useSelector, useDispatch } from 'react-redux';

const WishList = () => {
  const wishDetails = useSelector(state => state.wish);
  const { wishItems } = wishDetails;

  const dispatch = useDispatch();
  
  return (
    <>
    <div className="wishlist-sec-cont">
        <div className="wishlist-sec-heading">
        Wishlist
        </div>
        <div className="wishlist-product-heading">
            product name
            <div className="wishlist-heading-second">
                <span>unit price</span>
                <span>stock status</span>
            </div>
        </div>
        <div className="wishcard-cont">
        {!wishItems?<h1>WishList is Empty</h1>:
        wishItems.map((val,id)=>{
          return(
            <WishListCard key={id} item={val}   itemName={val.title}
                        price={val.price}
                        imgOne={val.imgOne}
                          stock={val.stock}
                        />
          )
        })
        }
        </div>
    </div>
    <Insta/>
    <Footer/>
</>
)
}

export default WishList