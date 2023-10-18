import React, { useState } from 'react'
import GetData from './Components/GetData/GetData'
import ShowList from './Components/ShowResult/ShowList'

const App = () => {
  const [UserDetails,setUserDetails] = useState([])
  const [MarkSheet,setMarksheet] = useState([])

  const updateData = (UserDtls,GradeSheet) =>{
    setUserDetails(UserDtls)
    setMarksheet(GradeSheet)
  }
  return (
    <>
    <header className='text-center my-3'>
      this is header 
      </header>

    <GetData
    SendData = {updateData}
    />

    <ShowList
    userDetails={UserDetails}
    markSheet = {MarkSheet}
    />
    </>
  )
}

export default App