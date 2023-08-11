import React from "react";

export default function SelectableButton({
  isSelected,
  userColor,
  handleOnClick,
  title,
  disabled = false,
}) {
  return (
    <>
      <button
        onClick={handleOnClick}
        disabled={disabled}
        className={
          "transition-all " +
          (isSelected ? "text-[26px] border-solid border-b-2 " : "") +
          (userColor === "userMissing"
            ? "border-userMissing"
            : userColor === "userWaiting"
            ? "border-userWaiting"
            : userColor === "userPresent"
            ? "border-userPresent"
            : "")
        }
      >
        {title}
      </button>
    </>
  );
}
