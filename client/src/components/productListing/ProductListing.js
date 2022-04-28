import React,{useState} from 'react'
import RatedCard from '../cards/ratedCard/RatedCard'
import PriceCard from '../cards/priceCard/PriceCard'
import ColorCard from '../cards/ColorChooseCard/ColorCard'
import Insta from '../instagram/Insta'
import Footer from '../footer/Footer'
import "./productlisting.css"
const ProductiListing = () => {
    const [isfilter,setIsfilter] = useState("")
    return (
        <>
            <div className="productlist-sec">
                <div className="product-header-cont">
                    <div className="product-header-heading">
                        Amayra's Shop
                    </div>
                    <div className="shop-header-category">
                        <div className="category-item">all</div>
                        <span>/</span>
                        <div className="category-item">ACCESSORIES</div>
                        <span>/</span>
                        <div className="category-item">clothing</div>
                        <span>/</span>
                        <div className="category-item">shoes</div>
                    </div>
                </div>




                <div className="product-body-sec">
                    <div className={`product-body-filter-sec ${isfilter}`} >
                        <div className="product-cat">
                            <div className="product-cat-item product-cancel">
                                Accessories 
                                <img src="images/cancel.png" alt="cancel" className='closeFilter' onClick={()=>setIsfilter("")}/>
                            </div>
                            <div className="product-cat-item">
                                Clothing
                                <div className="product-cat-sub-item">
                                    <span>-</span>
                                    Men's Jackets
                                </div>
                                <div className="product-cat-sub-item">
                                    <span>-</span>
                                    Men's Shirts
                                </div>
                                <div className="product-cat-sub-item">
                                    <span>-</span>
                                    Women's Dresses
                                </div>
                                <div className="product-cat-sub-item">
                                    <span>-</span>
                                    Women's Jackets
                                </div>
                            </div>
                            <div className="product-cat-item">
                                Shoes
                            </div>
                        </div>
                        <div className="size-filterr-cont">
                            <div className="f-heading">FILTER BY PRICE</div>
                            <div className="size-cont">
                                <span>l</span>
                                <span>m</span>
                                <span>s</span>
                                <span>us 10</span>
                                <span>us 6</span>
                                <span>us 7</span>
                                <span>us 8</span>
                                <span>us 9</span>
                                <span>xl</span>
                            </div>
                        </div>
                        <div className="product-filterr-cont">
                            <div className="f-heading">product tags</div>
                            <div className="tag-cont">
                                <span>996</span>
                                <span>london</span>
                                <span>winter</span>
                                <span>adidas</span>
                                <span>shirt</span>
                                <span>shoe</span>
                                <span>jackets</span>
                                <span>men</span>
                                <span>top</span>
                                <span>women</span>
                                <span>suite</span>
                                <span>brand</span>
                                <span>cap</span>
                                <span>green</span>
                                <span>black</span>
                                <span>training</span>
                                <span>exercise</span>
                                <span>scarf</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-body-card-sec">
                        <div className="product-cat-item">
                           <span> Showing 16 results
                            <img src="images/filter.png" alt="filter" className='filter-img' onClick={()=>setIsfilter("filter-active")}/></span>
                            <div className="product-card-cont">
                                <RatedCard imgSrc="images/card/shirt-1.jpeg" name={"ELEMENT BUFFALO PLAID FLANNEL SHIRT IN REGULAR FIT"} />
                                <ColorCard />
                                <PriceCard imgSrc={"images/card/shirt-2.jpeg"} name={"SELECTED HOME OVERCOAT"} />
                                <PriceCard imgSrc={"images/card/women-1.jpeg"} name={"MISSGUIDED RIBBED WRAP FRONT SLEEVELESS CROP TOP"} />
                                <RatedCard imgSrc="images/card/women-2.jpeg" name={"FAME AND PARTNERS TALL VALENCIA MAXI DRESS"} />
                                <PriceCard imgSrc={"images/card/women-3.jpeg"} name={"LAVISH ALICE DEEP BANDEAU ASYMMETRIC HEM MIDI DRESS"} />
                                <ColorCard />
                                <PriceCard imgSrc={"images/card/women-1.jpeg"} name={"MISSGUIDED RIBBED WRAP FRONT SLEEVELESS CROP TOP"}/>
                                <RatedCard imgSrc="images/card/shirt-1.jpeg" name={"ELEMENT BUFFALO PLAID FLANNEL SHIRT IN REGULAR FIT"} />
                            </div>
                        </div>
                    </div>
                </div>
                <Insta/>
                <Footer/>
            </div>
        </>
    )
}

export default ProductiListing 