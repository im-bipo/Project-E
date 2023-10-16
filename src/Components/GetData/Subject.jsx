import React, { useState,useEffect } from 'react'
import { gradeScore } from '../../assets/db/db'

const Subject = ({name,changeHandler,value, isDisable}) => {
    const change = e => {
    changeHandler(e)
    }
    return (
        <>
            <div className='mt-5'>

                <label htmlFor={name}>{name}</label>
                <select
                    disabled={isDisable}
                    onChange={change} name={name}
                    value={value}
                    required
                    className='bg-gray-500 mx-4 rounded-sm px-2' >

                    <option value='' disabled >Select Grade</option>
                    {gradeScore.map((gradeLetter,index) => (
                        <option
                            key={index}
                            value={gradeLetter}>
                            {gradeLetter}
                        </option>
                    ))}
                </select>

            </div>
        </>
    )
}

export default Subject