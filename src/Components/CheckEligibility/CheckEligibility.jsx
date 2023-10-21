import React, { useState } from "react";
import {courseCriteria} from '../../assets/db/courseCriteria'
const CheckEligibility = ({ userDetails, markSheet }) => {
  let CheckList = [];

  const { userName, board, facultie, course } = userDetails;

  const courseKeys = Object.keys(courseCriteria);
  for (let i = 0; i < courseKeys.length; i++) {
    const course = courseKeys[i];
    if (courseCriteria[course][board]) {
      const currentBoard = courseCriteria[course][board]
      if (
        currentBoard.faculty.some((value) => value == facultie) && //check faculty
        (currentBoard.requiredSubjects.length === 0 || //check required subject
          currentBoard.requiredSubjects.every((sub) =>
            Object.keys(markSheet).includes(sub)
          )) &&
        Object.values(markSheet).every(
          (value) => value <= currentBoard.minGrade
        )
      ) {
        CheckList = CheckList.concat(course);
      }
    }
  }

  return (
    <>
    <div className='flex justify-evenly  p-5'>

      {CheckList.map((item, index) => (
        <div
        key={index}
        className='w-[15rem] h-[15rem] rounded-lg bg-blue-950 text-white flex items-end p-4 font-medium text-2xl'>
          {item}
          </div>
      ))}
      </div>
    </>
  );
};

export default CheckEligibility;

