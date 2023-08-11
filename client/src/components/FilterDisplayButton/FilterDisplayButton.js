import React from "react";
import { useState } from "react";
import SelectableButton from "../SelectableButton/SelectableButton";

const FilterDisplayButton = ({emargementMode = true, chosenStatus, setChosenStatus }) => {
  const [PRESENT, WAITING, MISSING] = ["PRESENT", "WAITING", "MISSING"];

  return (
    <div>
      <div className="flex justify-center gap-4 mb-5 laptop:hidden">
        <SelectableButton
          isSelected={chosenStatus === PRESENT}
          title={"Present"}
          userColor={"userPresent"}
          handleOnClick={() => setChosenStatus(PRESENT)}
          disabled={emargementMode}
        />
        <SelectableButton
          isSelected={chosenStatus === WAITING}
          title={"En attente"}
          userColor={"userWaiting"}
          handleOnClick={() => setChosenStatus(WAITING)}
        />
        <SelectableButton
          isSelected={chosenStatus === MISSING}
          title={"Absent"}
          userColor={"userMissing"}
          handleOnClick={() => setChosenStatus(MISSING)}
          disabled={emargementMode}
        />
      </div>
    </div>
  );
};


export default FilterDisplayButton;