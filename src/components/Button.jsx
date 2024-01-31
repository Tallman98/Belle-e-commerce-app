const Button = ({ text }) => {
  return (
    <button className="bg-black text-white py-2 px-4 hover:bg-transparent  hover:text-black border border-black duration-300 ease-in-out  text-sm">
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
