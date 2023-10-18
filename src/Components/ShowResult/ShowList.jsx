import React from 'react'
import Subject from '../GetData/Subject'
import img from '../../assets/image/rishidhamala-cangrajuletun.gif'
import CheckEligibility from '../CheckEligibility/CheckEligibility'
const ShowList = 
(
{userDetails,
markSheet}
) => {

  Object.keys(markSheet).map((item) => {
  }) 

  if (Object.values(markSheet).includes('NG')){
    return(
      <>
      <div>
        <img src={img} alt="congrutulation" />
      </div>
      </>
    )
  }
  
if (Object.keys(markSheet).length === 0){
  return (
    <div>
  Fill the form to chck the availibility of course
      </div>
    )
  }
  return(
    <>
  You are eligible for: 
  <CheckEligibility 
  userDetails={userDetails}
  markSheet={markSheet}
  />
  
  </>
    )
}

export default ShowList