import React, { useEffect, useState } from 'react'
import Subject from './Subject'
import { defaultSubject } from '../../assets/db/db'
const MarkSheet = ({subjectList}) => {

useEffect(() => {
  setGrade(subjectList)
}, [subjectList])

    const changeHandler= e => {
        const name = e.target.name
        const value = e.target.value
        setGrade({...gradeSheet, [name] : value})
    }
    const [gradeSheet,setGrade] = useState(subjectList)
    console.log('gradeSheet', gradeSheet)
    return (
        <form id='markSheet'>
            <div className='flex space-x-5 flex-wrap'>

                {

                    Object.keys(gradeSheet).map((subject,index) => (
                        <Subject
                        key={index}
                        changeHandler={changeHandler}
                        name = {subject}
                        value = {gradeSheet[subject]}
                        isDisable = {Object.keys(subjectList)[2]=== defaultSubject[2] ?true : false}
                        />
                        ))
                    }
                
            </div>
        </form>
    )
}

export default MarkSheet