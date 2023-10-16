import React, { useState } from 'react'
import { courseDetails } from '../../assets/db/courseDetails'
import { defaultSubject } from '../../assets/db/db'
import MarkSheet from './MarkSheet'
import InputBox from './InputBox'

const arrayListing = list => {
    let SubjectObj = list.reduce((obj,current) => {
        obj[current] = ''
        return obj
    }, {})
    return SubjectObj   
}

const GetData = () => {
    const [GradeSheet,setGradeSheet] = useState(arrayListing(defaultSubject))
    const [userDetails, setUserDetails] = useState({
        userName: '',
        board: '',
        facultie: '',
        course: '',
    })
console.log('User Details: ',userDetails);
    //update users date
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log("NAME  :", name);
        switch (name) {
            case 'board': {
                if (userDetails.facultie !== '') {
                    setUserDetails({ ...userDetails, board: value, facultie: '', course: '' })
                    setGradeSheet(arrayListing(defaultSubject))
                    console.log("board called");
                }
                else
                setUserDetails({ ...userDetails, [name]: value })

                break;
            }
            case 'facultie': {
                if (userDetails.course !== '') {
                    setUserDetails({ ...userDetails, facultie: value, course: '', })
                    setGradeSheet(arrayListing(defaultSubject))
                    console.log("faculties called");
                }
                else
                setUserDetails({ ...userDetails, [name]: value })

                break;
            }
            case 'course': {                
                setUserDetails({ ...userDetails, course: value})

                setGradeSheet(arrayListing(courseDetails[userDetails.board][userDetails.facultie][value]))
                break;
                }
            }
            
        }
        
        // console.log("Subject of user: ", GradeSheet);

    //Board Lists
    const boardLists = Object.keys(courseDetails)

    //generating faculties list based on board selection
    let facultieLists;
    if (userDetails.board !== '') {
        facultieLists = Object.keys(courseDetails[userDetails.board]);
    }
    else {
        facultieLists = [];
    }


    //generating courseDetails list based on faculties selection
    let courseList;
    if (userDetails.facultie !== '') {
        courseList = Object.keys(courseDetails[userDetails.board][userDetails.facultie]);
    }
    else {
        courseList = [];
    }


    return (
        <section className='flex flex-col space-y-5'>

            <label htmlFor="userName">Full Name: </label>
            <input name='userName' type="text" onChange={handleChange} className='bg-gray-500 mx-4 rounded-sm px-2' />



            <InputBox
                lable='Board: '
                handleChange={handleChange}
                name='board'
                value= {userDetails.board}
                list={boardLists}

            />
            <InputBox
                lable='Faculties: '
                handleChange={handleChange}
                name = 'facultie'
                value = {userDetails.facultie}
                list={facultieLists}

            />

            <InputBox
                lable='Course: '
                handleChange={handleChange}
                name = 'course'
                value = {userDetails.course}
                list={courseList}

            />

            <MarkSheet
                subjectList = {GradeSheet}
            />

        </section>
    )
}

export default GetData