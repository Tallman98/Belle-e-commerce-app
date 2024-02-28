import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { removeWishlistItem } from "../features/wishlistSlice";
import { useNavigate } from "react-router-dom";

const WishlistItem = ({ image, product, price, status, id, color, size }) => {
  const dispatch = useDispatch();

  const itemToAdd = () => {
    dispatch(addToCart({ image, name: product, price, id, color, size }));
    dispatch(removeWishlistItem(id));
  };

  return (
    <div className="grid grid-cols-7">
      <div className="flex justify-center border items-center">
        <CloseIcon
          fontSize="small"
          onClick={() => dispatch(removeWishlistItem(id))}
        />
      </div>
      <div className=" border flex justify-center py-2">
        <img src={image} alt="" className="w-[100px]" />
      </div>
      <div className="col-span-2 border items-center flex px-3">{product}</div>
      <div className="border flex justify-center items-center">
        ${price.toFixed(2)}
      </div>
      <div className="border flex justify-center items-center">{status}</div>
      <div className="border flex justify-center items-center px-1">
        <button
          className="bg-black text-white md:py-2 md:px-4 "
          onClick={itemToAdd}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
