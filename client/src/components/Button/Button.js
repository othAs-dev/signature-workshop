import React from "react";

const Button = ({ name, callback, color, disabled }) => (
  <>
    <button
    type="button"
    disabled={disabled}
      onClick={callback}
      className={
        color === "primary"
          ? "bg-primary " + "rounded-md self-center py-3 px-9 text-white"
          : "bg-secondary " + "rounded-md self-center py-3 px-7 text-black"
      }
    >
      {name}
    </button>
  </>
);

export default Button;
