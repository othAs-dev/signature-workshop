import React from "react";
import "./CheckBoxCard.css";
const CheckBoxCard = ({ student }) => {
  return (
    <div className="flex items-center w-10/12 gap-4 mt-8 bg-white drop-shadow-lg px-4 rounded-lg py-2 laptop:w-full">
      <div className="flex flex-row gap-5 py-2 px-2">
        <div className="check-box relative w-5 h-5">
          <label className="check-box-label">
            <input
              type="checkbox"
              id="id"
              name="name"
              className="absolute w-0 h-0 cursor-pointer opacity-0"
            />
            <span className="checkmark w-6 h-6 absolute rounded top-0 left-0 bg-gray-600 cursor-pointer"></span>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <p>
          {student.firstname} {student.lastname}
        </p>
        <a
          className="underline underline-offset-1 text-[#6B6B6B]"
          href="mailto:faissoil.said@campus.academy"
        >
          {student.firstname}.
          {student.lastname.replace(/\s/g, "-").toLowerCase()}
          @campus.academy
        </a>
      </div>
      <div
        className="rounded-full w-[30px] h-[30px] relative "
        //style={{ backgroundColor: `${themeSelected.bg}` }}
      ></div>
    </div>
  );
};

export default CheckBoxCard;
