import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Wishlist from "./pages/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
}

export default App;
