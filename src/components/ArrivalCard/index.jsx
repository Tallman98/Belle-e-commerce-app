import "./arrivalCard.css";

const ArrivalCard = ({ id, img, name, price, rating }) => {
  return (
    <div>
      <div className="max-w-[250px] mb-4 cursor-pointer w-full relative px-2 img-wrapper overflow-hidden">
        <div className="w-full first-img">
          <img src={img} alt={name} className="w-full object-contain" />
        </div>
        <div className="flex w-full justify-center second-img h-full group">
          <button className="bg-white py-3 w-full text-xs font-[400] hover:bg-[#000000b7] hover:text-white duration-300 absolute bottom-[-50px] transition-all group-hover:bottom-2">
            ADD TO CART
          </button>
        </div>
      </div>
      <p className="text-xs mb-2">{name}</p>
      <p className="text-xs font-bold">${price.toFixed(2)}</p>
    </div>
  );
};

export default ArrivalCard;
