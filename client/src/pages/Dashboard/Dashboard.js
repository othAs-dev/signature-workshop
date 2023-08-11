import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Emargement from "../../components/Emargement/Emargement";
import FilterDisplayButton from "../../components/FilterDisplayButton/FilterDisplayButton";
import StudentDisplay from "../../components/StudentDisplay/StudentDisplay";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import ClassCountdown from "../../components/ClassCountdown/ClassCountdown";
const Dashboard = () => {
  const [emargement, setEmargement] = useState(false);
  const [chosenStatus, setChosenStatus] = useState('WAITING');
  const [PRESENT, WAITING, MISSING] = ["PRESENT", "WAITING", "MISSING"];
  const [classData, setClassData] = useState(null)

  let location = useLocation();

  useEffect(() => {
    const splitPathname = location.pathname.split('/');
    const id = splitPathname[splitPathname.length - 1];
    Axios.get(`http://localhost:3020/class/get/${id}`).then(res => { console.log(res); setClassData(res.data[0]) })
  }, [])

  useEffect(() => {
    if (emargement) {
      setChosenStatus("WAITING");
    }
  }, [emargement]);

  return (
    <>
      {classData ?
        <>
          <div className="text-center flex flex-col gap-y-3.5 mt-5">
            <div className=" flex flex-col gap-y-3.5">
              <p>Cours actuel</p>
              <h2 className="text-2xl">{classData.name} - {classData.level}</h2>
            </div>
            <div className="text-xl flex flex-row justify-center gap-x-6">
              <p>Temps restant :</p><ClassCountdown date={classData.endDate}/>
            </div>
          </div>
          <div className="flex row justify-center gap-x-10 mt-5">
            <Button
              name={"Emargement"}
              color={"secondary"}
              callback={() => setEmargement(true)}
              disabled={emargement}
            />
            <Button
              name={"Terminer"}
              color={"primary"}
              callback={() => setEmargement(false)} />
          </div>
          <div className="mt-5">
            <FilterDisplayButton emargementMode={emargement} chosenStatus={chosenStatus} setChosenStatus={setChosenStatus} />
          </div>
          <hr />
          <div>
            <StudentDisplay dataArr={arr} emargementMode={emargement} chosenStatus={chosenStatus} />
          </div>
        </>
        : <></>}
    </>
  );
};


const arr = [
  {
    id: uuidv4(),
    status: "PRESENT",
    firstname: "Faissoil",
    lastname: "SAID",
  },
  { id: uuidv4(), status: "PRESENT", firstname: "Faycal", lastname: "SAIDI" },
  { id: 2, status: "MISSING", firstname: "Othmane", lastname: "AIT SALAH" },
  { id: 3, status: "WAITING", firstname: "Mohammed", lastname: "SALAH" },
];

export default Dashboard;
