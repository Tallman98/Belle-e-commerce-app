import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  increaseQty,
  decreaseQty,
  removeCartItem,
} from "../features/cartSlice";

const CartItem = ({ id, name, image, color, size, price, quantity, total }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-7 py-2 border-b items-center px-2 w-full">
      <div className="w-[100px]">
        <img src={image} alt={id} className="w-full" />
      </div>

      <div className="col-span-2 md:pl-4 ml-10 md:ml-0">
        <p>{name}</p>
        <p className="text-[#787777] text-[10px] font-[400]">Color: {color}</p>
        <p className="text-[#787777] text-[10px] font-[400]">Size: {size}</p>
      </div>

      <div>
        <p>${price.toFixed(2)}</p>
      </div>

      <div className="md:flex items-center text-sm hidden">
        <button
          className="bg-[#7877774d] py-1 px-2"
          onClick={() => {
            if (quantity <= 1) {
              setIsDisabled(true);
            } else {
              dispatch(decreaseQty(id));
            }
          }}
          disabled={isDisabled}
        >
          -
        </button>
        <p className="py-1 px-2">{quantity}</p>
        <button
          className="bg-[#7877774d] py-1 px-2"
          onClick={() => {
            if (isDisabled) {
              setIsDisabled(false);
            }
            dispatch(increaseQty(id));
          }}
        >
          +
        </button>
      </div>

      <div className="hidden md:block">${total.toFixed(2)}</div>

      <div className="cursor-pointer hidden md:block">
        <button className="bg-[#2d2d2d16] p-1">
          <CloseIcon
            fontSize="small"
            onClick={() => dispatch(removeCartItem(id))}
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
