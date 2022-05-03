import React,{useState,useEffect} from 'react'
import RatedCard from '../cards/ratedCard/RatedCard'
import PriceCard from '../cards/priceCard/PriceCard'
import { useSelector, useDispatch } from 'react-redux'; // hooks
import Insta from '../instagram/Insta'
import Footer from '../footer/Footer'
import "./productlisting.css"
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link,useNavigate } from 'react-router-dom';

const ProductiListing = () => {
    const [isfilter,setIsfilter] = useState("")
    const {products}=useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    const navigate=useNavigate();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
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
                           <span> Showing 15 results
                            <img src="images/filter.png" alt="filter" className='filter-img' onClick={()=>setIsfilter("filter-active")}/></span>
                            <div className="product-card-cont">
                               
                            {
                    products.map((temp,index) => (
                       <>
                       {/* <Link to={`/product/${temp._id}`} style={{textDecoration: 'none'}}> */}
                        <RatedCard key={index} id={temp.id} imgSrcTwo={temp.imgTwo} imgSrcOne={temp.imgOne} stock={temp.stock} name={temp.title} price={temp.price} type={temp.type} />
                        {/* </Link> */}
{/* <PriceCard imgSrcTwo={temp.imgTwo} imgSrcOne={temp.imgOne} stock={temp.stock} name={products.name} /> */}
{/* <PriceCard imgSrcTwo={temp.imgTwo} imgSrcOne={temp.imgOne} stock={temp.stock} name={products.name} /> */}
{/* <RatedCard imgSrcTwo={temp.imgTwo} imgSrcOne={temp.imgOne} stock={temp.stock} name={products.name} /> */}
{/* <PriceCard imgSrcTwo={temp.imgTwo} imgSrcOne={temp.imgOne} name={products.name} /> */}

{/* <PriceCard imgSrcTwo={temp.imgTwo} imgSrcOne={temp.imgOne} stock={temp.stock} name={products.name}/> */}
{/* <RatedCard imgSrcTwo={temp.imgTwo} imgSrcOne={temp.imgOne} stock={temp.stock} name={products.name} /> */}
                      </>
                    ))
                }

                {/* <RatedCard imgSrcTwo={'images/card/shirt-2.jpeg'} imgSrcOne={"images/card/shirt-1.jpeg"} stock={false} name={"ELEMENT BUFFALO PLAID FLANNEL SHIRT IN REGULAR FIT"} />

<PriceCard imgSrcTwo={'images/card/shirt-1.jpeg'} imgSrcOne={"images/card/shirt-2.jpeg"} stock={true} name={"SELECTED HOME OVERCOAT"} />
<PriceCard imgSrcTwo={'images/card/women-2.jpeg'} imgSrcOne={"images/card/women-1.jpeg"} stock={true} name={"MISSGUIDED RIBBED WRAP FRONT SLEEVELESS CROP TOP"} />
<RatedCard imgSrcTwo={'images/card/women-1.jpeg'} imgSrcOne="images/card/women-2.jpeg" stock={true} name={"FAME AND PARTNERS TALL VALENCIA MAXI DRESS"} />
<PriceCard imgSrcTwo={'images/card/women-2.jpeg'} imgSrcOne={"images/card/women-3.jpeg"} name={"LAVISH ALICE DEEP BANDEAU ASYMMETRIC HEM MIDI DRESS"} />

<PriceCard imgSrcTwo={'images/card/women-2.jpeg'} imgSrcOne={"images/card/women-1.jpeg"} stock={true} name={"MISSGUIDED RIBBED WRAP FRONT SLEEVELESS CROP TOP"}/>
<RatedCard imgSrcTwo={'images/card/shirt-2.jpeg'} imgSrcOne="images/card/shirt-1.jpeg" stock={true} name={"ELEMENT BUFFALO PLAID FLANNEL SHIRT IN REGULAR FIT"} /> */}
                            
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