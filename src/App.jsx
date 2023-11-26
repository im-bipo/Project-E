import React, { useState } from "react";
import GetData from "./Components/GetData/GetData";
import ShowList from "./Components/ShowResult/ShowList";
import studentPic from "./assets/image/students.png";

const App = () => {
  const [UserDetails, setUserDetails] = useState([]);
  const [MarkSheet, setMarksheet] = useState([]);
  const [eligibleList,SetEligibleList] = useState([])

  const updateData = (UserDtls, GradeSheet) => {
    setUserDetails(UserDtls);
    setMarksheet(GradeSheet);
  };

  const updateEligibility = newDate => {

  }
  return (
    <>
      <header className="h-20 bg-[#f5f5f5]">
        <nav className="fixed bg-[#f5f5f5] flex items-center w-[100vw] h-20 border-b-2 z-10">
          <div className="pl-10 w-1/2">Logo</div>
          <div className="w-1/2 text-[1.1rem] flex justify-end">
            <a href="/" className="text-blue-800 mr-4">
              Home
            </a>
            <a href="/" className="mr-4 sm:mr-14">
              About Us
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col-reverse bg-[#f5f5f5] m-auto py-5 max-w-[30rem] md:max-w-[unset] md:m-[unset] md:flex-row md:min-h-[22rem] md:pt-10">
        <div className="flex flex-col pl-[5vw] md:pt-12 md:w-1/2 lg:1/3 lg:items-center">
          <div>
          <h1 className="font-normal text-gray-700 text-3xl md:text-[2.5rem] md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">
            Check and verify
            <br /> your eligibility for
            <br /> 100+ courses
          </h1>
          <button
            type="button"
            class="bg-gray-800 w-32 my-10 py-1 p-5 rounded-lg text-white"
          >
            Check Now
          </button>
          </ div>
        </div>
        <div className="md:w-1/2 lg:w-2/3 flex justify-center items-center overflow-hidden ">
          <img
            src={studentPic}
            alt="studentPic"
            className="w-[80%] max-w-[28rem] my-10 md:my-0 md:w-full md:min-w-[30rem] lg:min-w-[42rem] object-contain"
          />
        </div>
      </main>

      <GetData SendData={updateData} />

      <ShowList 
      userDetails={UserDetails} 
      markSheet={MarkSheet} 
      eligibleList={eligibleList}
      SetEligibleList={SetEligibleList}
      
      />
      <footer className="bg-gray-800 text-white text-center p-5">
        <a href="https://bipinkhatri.com.np">
        developed by &lt;t h e f o o l i s h d e v e l o p e r &gt; 
        </a>
      </footer>
    </>
  );
};

export default App;
