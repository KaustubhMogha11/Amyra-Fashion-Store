import React, {useEffect,useState} from "react";
import RatedCard from "../cards/ratedCard/RatedCard";
import PriceCard from "../cards/priceCard/PriceCard"
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import "./womensection.css"
const WomenSection = () => {
    const {products}=useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return <>
    <div className="mensjacket-sec">
    <div className="mens-jacket-sec-card-cont">
        <div className="mens-jacket-sec-cont">
            <div className="mens-jacket-sec-cont-heading">
            WOMEN'S DRESSES <br />
            <span>AMAYRA'S SHOP CHOICE</span>
            </div>
            <div className="womens-jacket-cont">
            {products.slice(0,3).map((val,index)=>{
                return(
                    <div key={index}>
                    <PriceCard id={val.id} imgSrcTwo={val.imgTwo} imgSrcOne={val.imgOne} stock={val.stock} name={val.title} type={val.type} price={val.price}/>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
    <div className="men-sec-img">
        <img src="images/amarya-img-2.jpg" alt="jacketsec" />
    </div>

    </div>
    </>;
};
export default WomenSection