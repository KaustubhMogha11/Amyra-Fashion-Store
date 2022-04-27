import React from 'react'
import './wishlist.css'
import Insta from '../instagram/Insta'
import Footer from '../footer/Footer'
import WishListCard from '../cards/wishlistCard/WishListCard'
const WishList = () => {
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
              <WishListCard itemName="LAVISH ALICE DEEP BANDEAU ASYMMETRIC HEM MIDI DRESS" price='880.00' stock='In Stock'/>
              <WishListCard itemName="FAME AND PARTNERS TALL VALENCIA MAXI DRESS" price='780.00' stock='Out of Stock'/>
              <WishListCard itemName="MISSGUIDED RIBBED WRAP FRONT SLEEVELESS CROP TOP" price='600.00' stock='In Stock'/>

            </div>
        </div>
        <Insta/>
        <Footer/>
    </>
  )
}

export default WishList 