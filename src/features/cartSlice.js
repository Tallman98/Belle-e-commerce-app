import { createSlice } from "@reduxjs/toolkit";
import item1 from "../assets/images/product-images/cape-dress-1.jpg";
import item2 from "../assets/images/product-images/cape-dress-2.jpg";
import item3 from "../assets/images/product-images/product-image1.jpg";

const initialState = {
  cartItems: [
    {
      id: 1,
      name: "Sleeve Kimono Dress",
      image: item1,
      color: "Black",
      size: "XL",
      price: 59,
      quantity: 1,
      total: 59.0,
    },
    {
      id: 2,
      name: "Elastic Waist Dress",
      image: item2,
      color: "Gray",
      size: "XXL",
      price: 99,
      quantity: 1,
      total: 99.0,
    },
    {
      id: 3,
      name: "Winter Jacket",
      image: item3,
      color: "Pink",
      size: "Small",
      price: 735,
      quantity: 1,
      total: 735,
    },
  ],
  amount: 3,
  sumTotal: 0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },

    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },

    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });

      state.sumTotal = total;
      state.amount = amount;
    },

    removeCartItem: (state, action) => {
      const itemId = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increaseQty: (state, action) => {
      const itemId = action.payload;
      let newPrice;

      state.cartItems.map((item) => {
        if (item.id === itemId) {
          item.quantity++;
          newPrice = item.price * item.quantity;
          item.total = newPrice;
          calculateTotal();
        }
      });
    },

    decreaseQty: (state, action) => {
      const itemId = action.payload;
      let newPrice;

      state.cartItems.forEach((item) => {
        if (item.id === itemId) {
          item.quantity--;
          newPrice = item.price * item.quantity;
          item.total = newPrice;
          calculateTotal();
        }
      });
    },

    addToCart: (state, action) => {
      action.payload.quantity = 1;
      action.payload.total = action.payload.price;
      state.cartItems.push(action.payload);
    },
  },
});

export default cartSlice.reducer;

export const {
  clearCart,
  toggleModal,
  calculateTotal,
  increaseQty,
  decreaseQty,
  removeCartItem,
  addToCart,
} = cartSlice.actions;
