import React from "react";
import ModuleImg from "../../assets/module.jpg";
import { Link } from "react-router-dom";

export default function ModuleList({ itemData }) {
  return (
    <div className="">
      {itemData.map((item) => (
        <Link
          className="flex flex-row bg-white drop-shadow-lg min-w-[180px] m-3 rounded-md overflow-hidden"
          to={{
            pathname: `/class/${item.id.replace(/\s+/g, "").trim()}`,
          }}
          key={item.id}
        >
          <div>
            <img src={ModuleImg} alt="" className="object-scale-down w-36" />
          </div>
          <div>
            <h2>{item.name}</h2>
            <p>{item.infos}</p>
          </div>
          <div></div>
        </Link>
      ))}
    </div>
  );
}
