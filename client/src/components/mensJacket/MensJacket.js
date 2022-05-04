import React, {useEffect,useState} from "react";
import RatedCard from "../cards/ratedCard/RatedCard";
import PriceCard from "../cards/priceCard/PriceCard"
import ColorCard from "../cards/ColorChooseCard/ColorCard"
import "./mensjacket.css"
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux'; // hooks
const MensJacket = () => {
    const {products}=useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return <>
    <div className="mensjacket-sec">
    <div className="men-sec-img">
        <img src="images/amarya-img-1.jpg" alt="jacketsec" />
    </div>
    <div className="mens-jacket-sec-card-cont">
        <div className="mens-jacket-sec-cont">
            <div className="mens-jacket-sec-cont-heading">
            MEN'S JACKETS <br />
            <span>AMAYRA'S SHOP CHOICE</span>
            </div>
            <div className="mens-jacket-cont">
            {products.slice(6,9).map((val,index)=>{
                return(
                    <div key={index}>
                    <PriceCard id={val.id} imgSrcTwo={val.imgTwo} imgSrcOne={val.imgOne} stock={val.stock} name={val.title} type={val.type} price={val.price}/>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
    </div>
    </>;
};

export default MensJacket;