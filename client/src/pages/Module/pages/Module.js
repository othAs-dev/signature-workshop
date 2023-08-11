import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Accordion } from "../../../components/Accordion/Accordion";
import inventory from "../../../data/inventory";
import ModuleList from "../../../components/ModuleList/ModuleList";
import Axios  from "axios";
import Button from "../../../components/Button/Button";

const Module = () => {
  const [cours, setCours] = useState(null)

  useEffect(() => {
    Axios.get('http://localhost:3020/class/all').then(res => setCours(res.data))
  }, [])
  const cardListArray = [
    inventory.slice(0, 2),
    inventory.slice(2, 4),
    inventory.slice(4, 6),
  ];
  return (
    <>
      {
        !!cours && !!cours.length &&
        <Accordion title="Mes cours">
          <ModuleList itemData={cours} />
        </Accordion>
      }
      {/* <Accordion title={"En cours"}>
        <ModuleList itemData={cardListArray[0]} />
      </Accordion>

      <Accordion title={"A venir"}>
        <ModuleList itemData={cardListArray[1]} />
      </Accordion>

      <Accordion title={"Fini"}>
        <ModuleList itemData={cardListArray[2]} />
      </Accordion> */}
    </>
  );
};

export default Module;
