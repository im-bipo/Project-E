import React, { useEffect, useState } from 'react'
import Subject from './Subject'
import { defaultSubject } from '../../assets/db/db'
const MarkSheet = ({ boardName, subjectList, sendReportCard }) => {

    useEffect(() => {
        setGrade(subjectList)
    }, [subjectList])


    const changeHandler = e => {
        const name = e.target.name
        const value = e.target.value
        setGrade({ ...gradeSheet, [name]: value })
    }

    const [gradeSheet, setGrade] = useState(subjectList)


    useEffect(() => {
        sendReportCard(gradeSheet)
    }, [gradeSheet])


    return (
        <div id='markSheet' className='border-gray-300 mt-5 border-t-2'>
            <div className='flex flex-col'>
                {
                    Object.keys(gradeSheet).map((subject, index) => (
                        <Subject
                            key={index}
                            boardName={boardName}
                            changeHandler={changeHandler}
                            name={subject}
                            value={gradeSheet[subject]}
                            isDisable={Object.keys(subjectList)[2] === defaultSubject[2] ? true : false}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default MarkSheet