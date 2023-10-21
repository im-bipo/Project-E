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
      {CheckList.map((item, index) => (
        <div
          key={index}
          className="w-[80%] h-20 bg-gray-200 rounded-md m-auto my-5 flex justify-center items-center"
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default CheckEligibility;

