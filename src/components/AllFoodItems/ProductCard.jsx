import {useContext} from "react";
import {CartContext} from "../../context";
import {CustomButton} from "../index";
import {useNavigate} from "react-router-dom";

export const ProductCard = (props) => {
  const {id, imageUrl, itemName, price} = props;

  const {addToCart, cartItems} = useContext(CartContext);

  const navigate = useNavigate();
  return (
    <div className={'flex flex-col gap-4 p-4 rounded-md bg-white border-[1px] border-gray-400 hover:bg-gray-100'}>
      <div className={''}>
        <img src={imageUrl} alt={itemName} className={'rounded-md'}/>
      </div>
      <div>
        <p className={'font-semibold text-md'}>
          {itemName}
        </p>
        <div>Price: <span className={'font-semibold text-gray-800'}>{price}</span></div>
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
