import React, { useEffect, useState } from "react";
import ClassImg from "../../assets/module.jpg";
import ModalUpdate from "../ModalUpdate/ModalUpdate";
import Axios from "axios";
import { DateTime } from "luxon";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function ModuleList({ itemData }) {
  const [moduleList, setModuleList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3020/class/all/`).then((res) => {
      setModuleList(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className=" flex flex-row flex-wrap justify-center">
      {moduleList.length &&
        moduleList.map((item) => (
          <AdminPanelModule
            classData={item}
            setModuleList={setModuleList}
            key={item.id}
          />
        ))}
    </div>
  );
}

function AdminPanelModule({ classData, setModuleList }) {
  const [classInfo, setClassInfo] = useState(classData);
  const [visible, setVisible] = useState(false);
  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3020/class/delete/${id}`).then((res) => {
      setModuleList(res.data);
    });
  };

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div
      className="flex flex-row bg-white drop-shadow-lg min-w-[180px] m-3 rounded-md overflow-hidden desktop:w-[30%] laptop:w-[45%] tablet:w-9/12"
      key={classInfo.id}
    >
      <img src={ClassImg} alt="" className="w-36" />
      <div className="ml-2 mt-2 flex-auto">
        <h2>{classInfo.names}</h2>
        <p className="pb-2">{classInfo.name}</p>
        <p className="pb-2">{classInfo.level}</p>
        <p>
          Couse starts at :{" "}
          {DateTime.fromISO(classInfo.startDate).toLocaleString(
            DateTime.DATETIME_MED
          )}
        </p>
        <p>
          Course ends at :{" "}
          {DateTime.fromISO(classInfo.endDate).toLocaleString(
            DateTime.DATETIME_MED
          )}
        </p>
      </div>
      <div className="flex flex-col ml-2 mt-2 flex-none w-12 items-center">
        <PencilSquareIcon
          onClick={() => {
            setVisible(true);
          }}
          className="px-2 w-12 flex-1 cursor-pointer"
        />
        <TrashIcon
          onClick={() => {
            deleteUser(classInfo.id);
          }}
          className="px-2 w-12 flex-1 cursor-pointer"
        />
      </div>
      {visible && (
        <ModalUpdate
          isOpen={visible}
          onClose={closeHandler}
          setModule={setClassInfo}
          module={classInfo}
        />
      )}
    </div>
  );
}
