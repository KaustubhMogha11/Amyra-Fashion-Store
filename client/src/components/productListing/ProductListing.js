import React,{useState,useEffect,useReducer} from 'react'
import RatedCard from '../cards/ratedCard/RatedCard'
import PriceCard from '../cards/priceCard/PriceCard'
import { useSelector, useDispatch } from 'react-redux'; // hooks
import Insta from '../instagram/Insta'
import Footer from '../footer/Footer'
import "./productlisting.css"
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link,useNavigate } from 'react-router-dom';
// import { FilterReduce } from '../../redux/reducers/FilterReducer'

const ProductiListing = () => {
    const [isfilter,setIsfilter] = useState("")
    const {products}=useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    // const [state] = useReducer(FilterReduce, { filterStore: [] })
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <>

        <div className="productlist-sec">
            <div className="product-header-cont">
                <div className="product-header-heading">Amayra's Shop</div>
                <div className="shop-header-category">
                    <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'ALL' }) }}>all</div>
                    <span>/</span>
                    <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'SHOES' }) }}>shoes</div>
                    <span>/</span>
                    <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'CLOTHING' }) }}>clothing</div>
                </div>
            </div>
            <div className="product-body-sec">
                <div className={`product-body-filter-sec ${isfilter}`}>
                    <div className="product-cat">
                        <div className="product-cat-item product-cancel">
                            Accessories
                            <img
                                src="images/cancel.png"
                                alt="cancel"
                                className="closeFilter"
                                onClick={() => setIsfilter("")}
                            />
                        </div>
                        <div className="product-cat-item">
                            Clothing

                            <div className="product-cat-sub-item" onClick={() => { dispatch({ type: 'SORT', payload: 'MEN' }) }}>
                                <span>-</span>
                                Men's Shirts
                            </div>
                            <div className="product-cat-sub-item" onClick={() => { dispatch({ type: 'SORT', payload: 'WOMEN' }) }}>
                                <span>-</span>
                                Women's Dresses
                            </div>

                        </div>
                        <div className="product-cat-item">Shoes</div>
                    </div>
                    <div className="size-filterr-cont">
                        <div className="f-heading">FILTER BY SIZE</div>
                        <div className="size-cont">
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'L' }) }}>l</span>
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'M' }) }}>m</span>
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'S' }) }}>s</span>
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'US10' }) }}>us 10</span>
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'US6' }) }}>us 6</span>
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'US7' }) }}>us 7</span>
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'US8' }) }}>us 8</span>
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'US9' }) }}>us 9</span>
                        </div>
                    </div>
                    <div className="size-filterr-cont">
                        <div className="f-heading">FILTER BY PRICE</div>
                        <div className="size-cont">
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' }) }}>HIGH TO LOW</span>
                            <span onClick={() => { dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' }) }}>LOW TO HIGH</span>
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