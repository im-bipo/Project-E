import React, { useState, useEffect } from "react";
import { gradeScore } from "../../assets/db/db";
import { ALevelGrade } from "../../assets/db/db";

const Subject = ({ boardName, name, changeHandler, value, isDisable }) => {
  const change = (e) => {
    changeHandler(e);
  };
  const [gradeList, SetGradeList] = useState([]);

  useEffect(() => {
    switch (boardName) {
      case "A-Level": {
        SetGradeList(ALevelGrade);
        break;
      }
      default: {
        SetGradeList(gradeScore);
        break;
      }
    }
  }, [boardName]);

  return (
    <>
      <div className="mt-5">
        <label htmlFor={name}>{name}</label>
        <select
          disabled={isDisable}
          onChange={change}
          name={name}
          value={value}
          required
          className="bg-gray-500 mx-4 rounded-sm px-2"
        >
          <option value="" disabled>
            Select Grade
          </option>
          {gradeList.map((gradeLetter, index) => (
            <option key={index} value={gradeLetter}>
              {gradeLetter}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Subject;
