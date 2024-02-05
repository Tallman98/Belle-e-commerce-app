import React from "react";

const Header = ({ text }) => {
  return (
    <div className="border-b border-t py-4 text-center bg-[#2d2d2d16] font-[500]">
      <h2 className="text-lg">{text}</h2>
    </div>
  );
};

export default Header;
