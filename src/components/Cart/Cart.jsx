import {useContext} from "react";
import {CartContext} from "../../context";
import {useNavigate} from "react-router-dom";
import {ItemList} from "../menu/Menu";
import {CartItem} from "./CartItem";
import {CustomButton} from "../index";

import {AnimatePresence, motion} from "framer-motion";

export const Cart = () => {
  const {cartItems, getTotalCartAmount, checkout} = useContext(CartContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      <div className={'w-full mx-auto flex flex-col justify-center mt-16 max-w-[1200px]'}>

        {totalAmount > 0 ? (
          <>
            <div className={'grid grid-cols-5   border-b-[1px] border-gray-400 pb-4 '}>
              {
                ['items', 'price', 'quantity', 'subtotal', 'remove'].map((item, index) => (
                  <span key={index} className={'uppercase text-center'}>{item}</span>))
              }
            </div>


            <AnimatePresence>

              <motion.div
                className="gap-4 mt-4"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
              >

                {ItemList.map((product) => {
                  if(cartItems[product.id]){
                    return <CartItem item={product} key={product.id}/>;
                  }
                  return null
                })}

              </motion.div>

            </AnimatePresence>


            <div className={'my-4 h-[1px] bg-gray-400 w-full'}/>

            <div className="flex items-center justify-between">
              <CustomButton
                handleClick={() => navigate("/")} textStyles={'font-semibold text-white'}
                containerStyles={'bg-blue-600 p-4 rounded-md'}> Continue Shopping</CustomButton>

              <div className={'flex justify-end items-center gap-8'}>
                <p className={'font-bold text-xl'}> Total: Rs {totalAmount} </p>
                <CustomButton
                  handleClick={() => {
                    checkout();
                    navigate("/checkout");
                  }}
                  textStyles={'font-semibold text-white'} containerStyles={'bg-red-600 p-4 rounded-md'}
                >
                  Checkout
                </CustomButton>
              </div>
            </div>
          </>
        ) : (
          <div
            className={'flex items-center justify-center w-full h-screen absolute top-0 left-0 flex-col z-[-1]'}
          >
            <img src={'/images/images-removebg-preview.png'} alt={'empty cart'}/>
            <p className={'text-4xl font-bold'}> Your Cart is Empty</p>
          </div>
        )}
      </div>

    </>
  )
}
