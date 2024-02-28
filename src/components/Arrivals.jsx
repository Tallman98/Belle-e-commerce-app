const Arrivals = ({ items, name, id, active, onClick }) => {
  return (
    <button
      key={id}
      className={`${
        active ? "text-black" : "text-[#818080db]"
      } hover:underline hover:text-black text-xs`}
      onClick={onClick}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Arrivals;
