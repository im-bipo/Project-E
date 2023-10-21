
export const courseCriteria = {
    CSIT: {
      NEB: {
        faculty: ["Science"],
        minGrade: 5,
        requiredSubjects: ["Physics", "Mathematics"],
      },
      'A-Level' : {
        faculty: ["Science"],
        minGrade: 4,
        requiredSubjects: ["Physics", "Mathematics"],
      },
      // 'CTEVTE' : {
      //   faculty: ["Science"],
      //   minGrade: 5,
      //   requiredSubjects: ["Physics", "Mathematics"],
      // },
    },
    BSc: {
      NEB : {
        faculty: ["Science"],
        minGrade: 6,
        requiredSubjects: [],
      },
    },
    MBBS: {
      NEB : {
        faculty: ["Science"],
        minGrade: 5,
        requiredSubjects: ["Biology"],
      },
      },
    BBS: {
      NEB : {
        board: ["NEB"],
        faculty: ['Science','LAW',"Management"],
        minGrade: 7,
        requiredSubjects: [],
      },
    },
  };