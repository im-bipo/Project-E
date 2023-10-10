import React, { useState, useEffect } from 'react'
import { gradeScore } from '../../assets/db/db'
import { courseList } from '../../assets/db/courseList'

const MarkSheet = (props) => {
    const userDetails = props.userDetails
    const [gradeSheet, setGradeSheet] = useState({})

    //disable form untill full course details are given
    let formDisable;



    // track the maks in each subject of selected course
    const changeMarks = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setGradeSheet({ ...gradeSheet, [name]: value, })
    }


    //set subject list based on course selection
    let subjectList;
    if (userDetails.course !== '') {
        subjectList = (courseList[userDetails.board][userDetails.facultie][userDetails.course])

        //form control
        formDisable = false;
    }
    else {
        subjectList = ['English', 'Nepali', 'Comp 1', 'Opt 1', 'Opt 2', 'Opt 3']

        //form control
        formDisable = true;
    }




    console.log(gradeSheet)
    // console.log(subjectList)
    return (
        <form id='markSheet'>
            <div className='flex space-x-5 flex-wrap'>

                {subjectList.map((subject) => (

                    <div key={subject.key} className='mt-5'>

                        <label htmlFor={subject}>{subject}</label>
                        <select  disabled={formDisable} onChange={changeMarks} name={subject} defaultValue='' className='bg-gray-500 mx-4 rounded-sm px-2' >
                            <option value='' disabled >Select Grade</option>
                            {gradeScore.map((grade) => (
                                <option key={grade.key} value={grade}>
                                    {grade}
                                </option>
                            ))}
                        </select>

                    </div>
                ))
                }
            </div>
        </form>
    )
}

export default MarkSheet