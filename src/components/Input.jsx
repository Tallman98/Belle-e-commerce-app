import React from "react";

const Input = ({ text }) => {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={text} className="text-sm mb-2 capitalize">
        {text}
      </label>
      <input type={text} className="border p-1" />
    </div>
  );
};

export default Input;
