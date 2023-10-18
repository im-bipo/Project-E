import React, { useState } from "react";

const courseCriteria = {
  'CSIT': {
    board : 'NEB',
    faculty: 'Science',
    // minGrade: 'C',
    requiredSubjects: ['Mathematics']
  },
  'MBBS': {
    board : 'NEB',
    faculty: 'Science',
    // minGrade: 'C',
    requiredSubjects: ['Biology']
  },
  'BBS': {
    board : 'NEB',
    faculty: 'Management',
    // minGrade: 'C',
    requiredSubjects: ['Biology']
  }
};

const CheckEligibility = ({ userDetails, markSheet }) => {
  let CheckList = []

  const { userName, board, facultie, course } = userDetails;

Object.keys(courseCriteria).map((course,index) => {
    if (courseCriteria[course].board == board && courseCriteria[course].faculty==facultie){
      CheckList = CheckList.concat(course)
    } 
   
})


  console.log('Checked subject: ',CheckList);
};

export default CheckEligibility;
