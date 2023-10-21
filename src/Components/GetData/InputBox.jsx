import React from 'react'

const InputBox = ({lable,handleChange,name,value,list}) => {
    const change = (e) =>{
        handleChange(e)
    }
  return (
    <>
    <div className="md:w-1/2 md:flex justify-center items-center md:my-2">
     <label htmlFor={name} className='inline-block mr-3'>{lable}</label>
            <select onChange={change} name={name} value={value} required className='bg-[unset] border-gray-800 border-b-2 
            focus:outline-none mt-1 mb-4 w-[80vw] max-w-[26rem] md:w-[75%]' >
                <option value='' disabled >Select {lable}</option>
                {list.map((item) => (
                  <option key={item} value={item}>{item}</option>
                  ))}
            </select>
                  </div>
    </>
  )
}

export default InputBox