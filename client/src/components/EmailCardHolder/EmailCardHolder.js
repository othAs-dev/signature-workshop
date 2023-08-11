import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useEffect } from "react";
export default function EmailCardHolder({ student }) {
  const [themeSelected, setThemeSelected] = useState({});
  const present = { color: "#008000", bg: "#D6EBD6" };
  const missing = { color: "#FF2B2B", bg: "#FFD9D9" };
  const waiting = { color: "#FFB42B", bg: "#FFF2D9" };
  useEffect(() => {
    if (student.status === "PRESENT") {
      setThemeSelected(present);
    }
    if (student.status === "MISSING") {
      setThemeSelected(missing);
    }
    if (student.status === "WAITING") {
      setThemeSelected(waiting);
    }
  }, [student.status]);
  return (
    <div className="flex items-center w-10/12 justify-between mt-8 bg-white drop-shadow-lg px-4 rounded-lg py-2 laptop:w-full">
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
        style={{ backgroundColor: `${themeSelected.bg}` }}
      >
        <UserOutlined
          style={{
            color: themeSelected.color,
            fontSize: "16px",
            top: "50%",
            right: "50%",
            transform: "translate(50%, -50%)",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
}
