import { createBreakpoint } from "react-use";

import React, { useState, useEffect } from "react";
import CheckBoxCard from '../CheckBoxCard/CheckBoxCard'
import EmailCardHolder from '../EmailCardHolder/EmailCardHolder'

const useBreakPoint = createBreakpoint({
  tablet: 640,
  laptop: 1024,
});

const StudentDisplay = ({ dataArr, emargementMode, chosenStatus }) => {
  const breakpoint = useBreakPoint();
  return (
    <div className="flex flex-col items-center justify-center">
      {dataArr.length ? (
        breakpoint === 'laptop' ?
          <MultiStatusDisplay arr={dataArr} emargementMode={emargementMode} /> :
          <OneStatusDisplay arr={filterByStatus(dataArr, chosenStatus)} emargementMode={emargementMode} />
      ) : (
        ""
      )}
    </div>
  )
}


const OneStatusDisplay = ({ arr, emargementMode }) => {
  return (
    <>
      {arr.length &&
        emargementMode ?
        arr.map(student => <CheckBoxCard student={student} key={student.id} />) :
        arr.map(student => <EmailCardHolder student={student} key={student.id} />)}
    </>
  )
}
const MultiStatusDisplay = ({ arr, emargementMode }) => {
  const [presentCard, waintingCard, missingCard] = filterAndGroupByStatus(arr)
  let [waintingCardList, setWaintingCardList] = useState()
  useEffect(() => {
    if (emargementMode) {
      setWaintingCardList(waintingCard.map(student => <CheckBoxCard student={student} key={student.id} />))
    } else {
      setWaintingCardList(waintingCard.map(student => <EmailCardHolder student={student} key={student.id} />))
    }
  }, [emargementMode])
  return (
    <div className="flex flex-row justify-center items-start gap-[24px]">
      {presentCard.length ?
        <div>
          {presentCard}
        </div> : ''}
      {waintingCard.length ?
        <div>
          {waintingCardList}
        </div> : ''}
      {missingCard.length ?
        <div>
          {missingCard}
        </div> : ''}
    </div>
  );
};

function filterByStatus(arr, status){
  return arr.filter(student => student.status === status)
}

function filterAndGroupByStatus(arr) {
  return [
    filterByStatus(arr, 'PRESENT').map((student) => <EmailCardHolder student={student} key={student.id} />),
    filterByStatus(arr, 'WAITING'),
    filterByStatus(arr, 'MISSING').map((student) => <EmailCardHolder student={student} key={student.id} />),
  ];
}


export default StudentDisplay;