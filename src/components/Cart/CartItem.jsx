import {CustomButton} from "../index";
import {useContext, useState} from "react";
import {IoMdAdd, IoMdRemove} from "react-icons/io";
import {MdDelete} from "react-icons/md";
import {CartContext} from "../../context";
import {motion} from "framer-motion";

export const CartItem = ({item}) => {

  const {cartItems, updateCartItemCount} = useContext(CartContext);
  const quantity = cartItems[item.id];
  const [isItemDismounted, setIsItemDismounted] = useState(false);


  const removeAnimationOfItem = () => {
    setIsItemDismounted(true)
    setTimeout(() => {
      return updateCartItemCount(0, item.id);
    }, 400)
  }
  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      updateCartItemCount(quantity + 1, item.id);
    } else if (type === 'decrement') {
      if (quantity === 1) {
        removeAnimationOfItem()
      } else {
        updateCartItemCount(quantity - 1, item.id);
      }
    }
  }

  const removeVariants = {
    "default":{opacity: 1, x: 0},
    "removed": {opacity:0, x: 100},
  }


  return (

      <motion.div
        variants={removeVariants}
        className={'max-w-[1200px] mx-auto grid grid-cols-5 mb-2 justify-center items-center text-center h-30 w-full'}
        animate={isItemDismounted? 'removed': 'default'}
      >
        <div className={'flex gap-3 items-center '}>
          <div className={'overflow-hidden w-20'}>
            <img src={item.imageUrl} alt={item.imageUrl}/>
          </div>

          <span className={'text-xl font-medium'}>{item.itemName}</span>
        </div>
        <div>
          Rs. {item.price}
        </div>
        <div className={'flex gap-3 items-center justify-center'}>

          <CustomButton
            handleClick={() => handleQuantityChange('decrement')}
            containerStyles={'border-[1px] rounded-sm border-gray-300'}>
            <IoMdRemove/>
          </CustomButton>
          <span>{quantity}</span>
          <CustomButton
            handleClick={() => handleQuantityChange('increment')}
            containerStyles={'border-[1px] rounded-sm border-gray-300'}>
            <IoMdAdd/>
          </CustomButton>

        </div>
        <div>
          Rs. {item.price * quantity}
        </div>
        <div>
          <CustomButton
            textStyles={'text-red-600 text-xl'}
            containerStyles={'border-[1px] rounded-full border-red-600 p-2'}
            handleClick={() => {
              removeAnimationOfItem()
            }}
          >
            <MdDelete/>
          </CustomButton>
        </div>
      </motion.div>


  )
}
