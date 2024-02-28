import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import CardModalItem from "./CardModalItem";
import { Link } from "react-router-dom";
import { toggleModal } from "../features/cartSlice";

const CartModal = () => {
  const cart = useSelector((store) => store.cart);
  const items = cart.cartItems;
  const dispatch = useDispatch();

  return (
    <aside
      className={`bg-white text-black p-3 mt-12 ${
        !cart.isOpen && "hidden"
      } shadow-2xl`}
    >
      {items.map((item) => (
        <CardModalItem {...item} key={item.id} />
      ))}
      <div className="flex items-center justify-between border-b py-2">
        <h2 className="text-xs">CART SUBTOTAL:</h2>
        <p>${cart.sumTotal.toFixed(2)}</p>
      </div>
      <div className="text-white flex justify-between mt-2">
        <div className="text-xs ">
          <Link to="cart" onClick={() => dispatch(toggleModal())}>
            <Button text="view cart" />
          </Link>
        </div>
        <div className="text-xs">
          <Button text="checkout" />
        </div>
      </div>
    </aside>
  );
};

export default CartModal;
