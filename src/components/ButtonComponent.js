import React from "react";

function ButtonComponent({ text, onClickHandler, variant = "contained" }) {
  const btnStyle =
    variant === "outlined"
      ? "bg-transperent text-primary border border-solid border-primary text-base"
      : "text-fontWhite bg-primary text-base";
  return (
    <>
      <button
        className={`px-2 py-1 rounded-md ${btnStyle}`}
        onClick={onClickHandler}
      >
        {text}
      </button>
    </>
  );
}

export default ButtonComponent;
