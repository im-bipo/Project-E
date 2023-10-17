import React from 'react'
import Subject from '../GetData/Subject'
import img from '../../assets/image/rishidhamala-cangrajuletun.gif'
const ShowList = 
(
{userDetails,
markSheet}
) => {
  console.log("subject are: ",markSheet)

  Object.keys(markSheet).map((item) => {
    console.log(`${item} marks: `,markSheet[item])
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
  </>
    )
}

export default ShowList