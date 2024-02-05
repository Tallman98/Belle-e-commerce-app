import Header from "../components/Header";
import WishlistItem from "../components/WishlistItem";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistItem = useSelector((store) => store.wishlist.wishlistItems);

  return (
    <section className="md:mt-16">
      <Header text="WISH LIST" />
      <div className="max-w-[1200px] mx-auto text-xs my-10 px-4">
        <div className="grid grid-cols-7 border font-semibold">
          <h2 className="border-x py-2 text-center">REMOVE</h2>
          <h2 className="border-x text-center py-2">IMAGES</h2>
          <h2 className="border-x py-2 px-2 col-span-2">PRODUCT</h2>
          <h2 className="border-x text-center py-2">UNIT PRICE</h2>
          <h2 className="border-x text-center py-2">STOCK STATUS</h2>
          <h2 className="border-x text-center py-2">ADD TO CART</h2>
        </div>
        {wishlistItem.map((item, i) => (
          <WishlistItem {...item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
