import React, { useState } from 'react'
import { courseList } from '../../assets/db/courseList'
import MarkSheet from './MarkSheet'

// destrucutring Course list 




const GetData = () => {
    const [userDetails, setUserDetails] = useState({
        userName: '',
        board: '',
        facultie: '',
        course: '',
    })


    // console.log(userDetails)
  

    // console.log()

    
    //update users date
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setUserDetails({ ...userDetails, [name]: value })
    }
    
    const changeBoard = e => {
        const value = e.target.value;
        if (userDetails.facultie !== ''){
            setUserDetails({...userDetails,board : value, facultie: '',course: ''})
        }
        else{
            handleChange(e) 
        }
    }
    const changeFacultie = e => {
        const value = e.target.value;
        if (userDetails.course !== ''){
            setUserDetails({...userDetails,facultie : value, course: '',})
        }
        else{
            handleChange(e)
        }
    }



    //conditional rendering of faculties lists
    let facultieLists;
    if(userDetails.board !== ''){
        facultieLists = Object.keys(courseList[userDetails.board]);
    }
    else{
        facultieLists = [];
    }


    //conditional rendering of Course lists
    let courseTitle;
    if(userDetails.facultie !== ''){
        courseTitle = Object.keys (courseList[userDetails.board][userDetails.facultie]);
    }
    else{
        courseTitle = [];
    }
    // console.log(courseTitle)


    return (
        <div className='flex flex-col space-y-5'>
            <label htmlFor="userName">Full Name: </label>
            <input name='userName' type="text" onChange={handleChange} className='bg-gray-500 mx-4 rounded-sm px-2' />



            <label htmlFor="boardName">Board: </label>
            <select onChange={changeBoard} name='board' defaultValue='' className='bg-gray-500 mx-4 rounded-sm px-2' >
                <option value='' disabled >Select Board</option>
                {Object.keys(courseList).map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>



            <label htmlFor="FacultiesList">Faculties</label>
            <select onChange={changeFacultie} name='facultie' value={userDetails.facultie} className='bg-gray-500 mx-4 rounded-sm px-2' >
                <option value='' disabled >Select Faculties</option>
                {facultieLists.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>



            <label htmlFor="FacultiesList">Course</label>
            <select onChange={handleChange} name='course' value={userDetails.course} className='bg-gray-500 mx-4 rounded-sm px-2' >
                <option value='' disabled >Select Course</option>
                {courseTitle.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
                    <MarkSheet
                    userDetails={userDetails}
                    />

        </div>
    )
}

export default GetData