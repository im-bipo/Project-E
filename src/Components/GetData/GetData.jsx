import React, { useState } from 'react'
import { courseDetails } from '../../assets/db/courseDetails'
import { defaultSubject } from '../../assets/db/db'
import MarkSheet from './MarkSheet'
import InputBox from './InputBox'

const arrayListing = list => {
    let SubjectObj = list.reduce((obj, current) => {
        obj[current] = ''
        return obj
    }, {})
    return SubjectObj
}

const GetData = ({SendData}) => {
    const [SubjectList, setSubjectList] = useState(arrayListing(defaultSubject))
    const [ReportCard,setReportCard] = useState([])
    const [userDetails, setUserDetails] = useState({
        userName: '',
        board: '',
        facultie: '',
        course: '',
    })

        
            const handleSubmit = (e) => {
                e.preventDefault()
                SendData(userDetails,ReportCard)
            }


    //update users date
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        
        switch (name) {
            case 'board': {
                if (userDetails.facultie !== '') {
                    setUserDetails({ ...userDetails, board: value, facultie: '', course: '' })
                    setSubjectList(arrayListing(defaultSubject))
                }
                else
                    setUserDetails({ ...userDetails, [name]: value })

                break;
            }
            case 'facultie': {
                if (userDetails.course !== '') {
                    setUserDetails({ ...userDetails, facultie: value, course: '', })
                    setSubjectList(arrayListing(defaultSubject))
                }
                else
                    setUserDetails({ ...userDetails, [name]: value })

                break;
            }
            case 'course': {
                setUserDetails({ ...userDetails, course: value })

                setSubjectList(arrayListing(courseDetails[userDetails.board][userDetails.facultie][value]))
                break;
            }
            default: {
                setUserDetails({ ...userDetails, [name]: value })
                break;
            }
        }

    }


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

            <form onSubmit={handleSubmit}> 

                <label htmlFor="userName">Full Name: </label>
                <input name='userName' placeholder='Ram  Bahadur Thapa' type="text" onChange={handleChange} required className='bg-gray-500 mx-4 rounded-sm px-2' />



                <InputBox
                    lable='Board: '
                    handleChange={handleChange}
                    name='board'
                    value={userDetails.board}
                    list={boardLists}

                />
                <InputBox
                    lable='Faculties: '
                    handleChange={handleChange}
                    name='facultie'
                    value={userDetails.facultie}
                    list={facultieLists}

                />

                <InputBox
                    lable='Course: '
                    handleChange={handleChange}
                    name='course'
                    value={userDetails.course}
                    list={courseList}

                />

                <MarkSheet
                    subjectList={SubjectList}
                    sendReportCard = {setReportCard}
                />

            <input type="submit" className='p-3 bg-gray-500 m-2'/>        
            </form>
        </section>

    )
}

export default GetData