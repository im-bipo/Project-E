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

      <div className="mt-5 flex md:min-w-[20%] md:flex-row md:px-[3vw] md:py-2 ">
        <label htmlFor={name} className="w-1/3 md:w-3/4">{name} : </label>
        <select
          disabled={isDisable}
          onChange={change}
          name={name}
          value={value}
          required
          className="bg-[unset] border-gray-800 border-b-2 focus:outline-none w-2/3 md:w-[8rem]"
        >
          <option value="" disabled>
            Select Grade
          </option>
          {gradeList.map((gradeLetter, index) => (
            <option key={index} value={index} className="">
              {gradeLetter}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Subject;
