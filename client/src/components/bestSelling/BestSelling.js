import React, {useEffect,useState} from "react";
import "./bestselling.css";
import ColorCard from "../cards/ColorChooseCard/ColorCard"
import PriceCard from "../cards/priceCard/PriceCard"
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux'; // hooks
const BestSelling = () => {
  const {products}=useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
  return (
    <>
      <div className="best-selling-sec">
        <div className="bestselling-title">BEST SELLING PRODUCTS</div>
        <div className="scrolling-cont">
        <div className="best-selling-card-cont">
        {products.slice(4,9).map((val,index)=>{
                return(
                    <div key={index}>
                    <PriceCard id={val.id} imgSrcTwo={val.imgTwo} imgSrcOne={val.imgOne} stock={val.stock} name={val.title} type={val.type} price={val.price}/>
                    </div>
                )
            })}
        </div>
        </div>

      </div>
    </>
  );
};

export default BestSelling;