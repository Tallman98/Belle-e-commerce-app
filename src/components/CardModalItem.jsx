import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import {
  increaseQty,
  decreaseQty,
  removeCartItem,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CardModalItem = ({
  id,
  name,
  image,
  color,
  price,
  size,
  quantity,
  total,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-start py-3 gap-3 border-b last:pb-4 first:pt-0">
      <div className="w-[70px]">
        <img src={image} alt={id} className="w-full" />
      </div>

      <div className="text-xs">
        <h2>{name}</h2>
        <p className="text-[#787777] text-[10px] font-[400]">
          {color} / {size}
        </p>
        <div className="flex items-center gap-1 my-1">
          <p>Qty:</p>
          <div className="flex items-center text-sm">
            <button
              className="bg-[#7877774d] py-1 px-2"
              onClick={() => dispatch(decreaseQty(id))}
            >
              -
            </button>
            <p className="py-1 px-2">{quantity}</p>
            <button
              className="bg-[#7877774d] py-1 px-2"
              onClick={() => dispatch(increaseQty(id))}
            >
              +
            </button>
          </div>
        </div>
        <p>${price}.00/unit</p>
        <p>Total: ${total}</p>
      </div>

      <div className="flex gap-1 ml-auto">
        <div>
          <Link to="cart">
            <DriveFileRenameOutlineOutlinedIcon
              fontSize="small"
              sx={{ fontSize: 14 }}
            />
          </Link>
        </div>
        <div>
          <CloseIcon
            fontSize="small"
            sx={{ fontSize: 14 }}
            onClick={() => dispatch(removeCartItem(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default CardModalItem;
