import React, { useRef, useState } from "react";

const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  /**
   * @type {React.MutableRefObject<HTMLInputElement>}
   */
  let inputRef = useRef(null);
  return (
    <>
      <div className="relative h-14 border-solid border-2 rounded-md border-gray-400	">
        <label
          htmlFor={props.id}
          className={
            "text-base absolute z-10 text-[1.286rem] desktop:text-lg text-gray-500 transition-all " +
            (isFocused
              ? "translate-y-[-50%] text-default bg-white px-2 left-5"
              : "translate-y-[50%] pl-5")
          }
        >
          {props.label}
        </label>
        <input
          onChange={props.onChange}
          value={props.value}
          type={props.type}
          id={props.id}
          className="border-none h-full p-1 w-full rounded-md"
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (inputRef.current.value === "" && inputRef.current.focus) {
              setIsFocused(false);
            }
          }}
          required
        />
      </div>
    </>
  );
};

export default Input;

//
