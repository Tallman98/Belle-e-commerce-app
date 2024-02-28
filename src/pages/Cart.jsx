import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import paypal from "../assets/paypal.svg";
import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";
import americanExpress from "../assets/american-express.svg";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <section className="my-16">
      <Header text="YOUR CART" />
      <div className="flex flex-col md:flex-row max-w-[1150px] mx-auto gap-7 md:mt-16 px-4">
        <div className="md:w-2/3 px-2">
          <div className="bg-[#2d2d2d16] w-full md:grid grid-cols-7 py-1 text-[13px] hidden border">
            <div></div>
            <div className="col-span-2 pl-4">PRODUCT</div>
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>TOTAL</div>
            <div></div>
          </div>

          {cartItems.map((item, i) => {
            return <CartItem key={i} {...item} />;
          })}

          <p className="text-xs py-4 border-b">
            We process all orders in USD. While the content of your cart is
            currently displayed in USD, the checkout will use USD at the most
            current exchange rate.
          </p>

          <h2 className="font-semibold py-4">Get shipping estimates</h2>

          <div className="flex flex-col gap-2 md:flex-row justify-between w-full">
            <div>
              <p className="text-xs mb-2">Country</p>
              <select className="md:w-[230px] border py-2 px-1 w-full ">
                <option value="">Nigeria</option>
              </select>
            </div>
            <div>
              <p className="text-xs mb-2">State</p>
              <select className="md:w-[230px] border py-2 px-1 w-full">
                <option value="">Lagos</option>
              </select>
            </div>
            <div>
              <p className="text-xs mb-2">Postal/Zip Code</p>
              <input
                type="text"
                className="md:w-[230px] border py-[6px] px-1 w-full "
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="bg-[#2d2d2d16] border border-[#787777] text-xs py-2 px-4">
              CALCULATE SHIPPING
            </button>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="border p-4 mb-4 text-[13px]">
            <p className="mb-1">ADD A NOTE TO YOUR ORDER</p>
            <textarea rows="9" className="border w-full" />
          </div>
          <div className="border p-4 text-xs">
            <div className="flex justify-between text-[13px] mb-2">
              <p className="font-bold">SUBTOTAL</p>
              <p className="font-bold">${cart.sumTotal.toFixed(2)}</p>
            </div>
            <p className="mb-2">Shipping & taxes calculated at checkout</p>
            <div className="flex gap-2 mb-4">
              <input type="checkbox" />
              <p>
                I agree with the{" "}
                <span className="text-[#17a2b8] cursor-pointer font-semibold">
                  terms and conditions
                </span>
              </p>
            </div>
            <button className="bg-[#787777] text-white w-full font-[200] py-3">
              CHECKOUT
            </button>
            <div className="flex justify-between items-center pt-2">
              <div>
                <img src={paypal} alt="paypal" />
              </div>
              <div>
                <img src={visa} alt="visa" />
              </div>
              <div>
                <img src={mastercard} alt="mastercard" />
              </div>
              <div>
                <img src={americanExpress} alt="americanExpress" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
