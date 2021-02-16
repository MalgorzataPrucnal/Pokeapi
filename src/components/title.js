import React from "react";

export const Title = ({ children, className, ...props }) => {
  return (
    <h1
      className={`poke-font text-2xl text-center mt-2 text-white font-bold ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </h1>
  );
};
