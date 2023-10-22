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

  if (Object.values(markSheet).includes(8)){
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
      <h2 className="font-medium text-xl ctmUnderline block w-fit my-4 mx-auto">Fill the details </h2>
      <div className='flex justify-evenly flex-wrap gap-5 p-5'>
      {Array(4).fill().map((_, i) => (
          <div key={i} className='w-[15rem] h-[15rem] rounded-lg bg-blue-950 animate-pulse'></div>
        ))}
      </div>
      </div>
    )
  }
  return(
    <>
    <div className='w-full'>
      <h2 className="font-medium text-xl ctmUnderline block w-fit my-4 mx-auto">{userDetails.userName} you are eligible for </h2>
  <CheckEligibility 
  userDetails={userDetails}
  markSheet={markSheet}
  />
  </div>
  <p className='text-center py-5'><i className='text-[red] font-medium '>DISCLAIMER: Test Project</i></p>
  
  </>
    )
}

export default ShowList