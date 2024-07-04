import React, {useContext} from "react";
import {CartContext} from "../../context";
import {CustomButton} from "../CustomButton/CustomButton";
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";
// import pbm from "./pbm.jpeg";

const CardMenu = (props)=>{
  const navigate = useNavigate();
  const {id, imageUrl, itemName, price, rating} = props;
  const {addToCart, cartItems} = useContext(CartContext);

    return(
        <div className="menucard w-full h-full flex justify-center items-center border-solid border-orange-600 border-2 shadow-xl rounded-xl">
            <div className="img w-2/5 h-full ">
                <img src={imageUrl} alt="" className = "h-full w-full rounded-l-xl p-2" />
            </div>
          <div className="desc w-2/5 h-full">
            <div>
              <p className={'font-semibold text-md'}>
                {itemName}
              </p>
              <p className={'font-semibold text-md'}>
                <Rating name="read-only" value={rating} readOnly size="small"/>
              </p>
              <div>Price: <span className={'font-semibold text-gray-800'}>{price}</span></div>
            </div>
          </div>
          {
            cartItems[id] > 0 ? (
                <CustomButton
                  textStyles="font-medium text-white bg-blue-700 py-2 rounded-full w-full px-4"
                  handleClick={() => {
                    navigate('/cart')
                  }}
                >
                  Go To Cart
                </CustomButton>) :
              <CustomButton
                textStyles="font-medium text-white bg-blue-700 py-2 rounded-full w-full px-4"
                handleClick={() => {
                  addToCart(id)
                }}
              >
                Add To Cart
              </CustomButton>
          }
        </div>
    )
}

export default CardMenu;
