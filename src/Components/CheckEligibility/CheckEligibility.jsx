import React, { useState } from "react";

const courseCriteria = {
  CSIT: {
    board: "NEB",
    faculty: "Science",
    // minGrade: 'C',
    requiredSubjects: ["Mathematics"],
  },
  BSc: {
    board: "NEB",
    faculty: "Science",
    // minGrade: 'C',
    requiredSubjects: [],
  },
  MBBS: {
    board: "NEB",
    faculty: "Science",
    // minGrade: 'C',
    requiredSubjects: ["Biology"],
  },
  BBS: {
    board: "NEB",
    faculty: "Management",
    // minGrade: 'C',
    requiredSubjects: [],
  },
};

const CheckEligibility = ({ userDetails, markSheet }) => {
  let CheckList = [];

  const { userName, board, facultie, course } = userDetails;

  Object.keys(courseCriteria).map((course) => {
    if (
      courseCriteria[course].board == board && //chekc board
      courseCriteria[course].faculty == facultie &&   //chek faculty
      (courseCriteria[course].requiredSubjects.length === 0 ||  //check required subject 
        courseCriteria[course].requiredSubjects.some((sub) =>
          Object.keys(markSheet).includes(sub)
        ))
    ) {
      CheckList = CheckList.concat(course);
    }
  });
  return (
    <>
      {CheckList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};

export default CheckEligibility;
