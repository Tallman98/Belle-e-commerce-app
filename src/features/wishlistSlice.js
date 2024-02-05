import { createSlice } from "@reduxjs/toolkit";
import imag1 from "../assets/images/product-images/product-image8.jpg";
import imag2 from "../assets/images/product-images/product-image4.jpg";
import imag3 from "../assets/images/product-images/product-image5.jpg";

const initialState = {
  wishlistItems: [
    {
      image: imag1,
      product: "Minerva Dress Black",
      price: 165,
      status: "In stock",
      id: 10,
      color: "Black",
      size: "Medium",
    },
    {
      image: imag2,
      product: "Flowery Dress",
      price: 150,
      status: "Out of stock",
      id: 20,
      color: "Flowery",
      size: "Medium",
    },
    {
      image: imag3,
      product: "Woven Solid Midi Shirt Dress",
      price: 150,
      status: "In stock",
      id: 30,
      color: "Tricolor",
      size: "Large",
    },
  ],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    removeWishlistItem: (state, action) => {
      const itemId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== itemId
      );
    },
  },
});

export default wishlistSlice.reducer;

export const { removeWishlistItem } = wishlistSlice.actions;
