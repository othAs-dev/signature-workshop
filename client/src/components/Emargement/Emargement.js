import React from "react";
import CheckBoxCard from "../CheckBoxCard/CheckBoxCard";
export default function Emargement() {
  const student = { firstname: "faissoil", lastname: "Saidi" };
  return (
    <>
      <hr />
      <div className="flex flex-col items-center justify-center">
        <CheckBoxCard student={student} />
      </div>
    </>
  );
}
