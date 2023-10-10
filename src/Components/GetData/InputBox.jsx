import React from 'react'

const InputBox = ({lable,handleChange,name,value,list}) => {
    const change = (e) =>{
        handleChange(e)
    }
  return (
    <>
     <label htmlFor="boardName">{lable}</label>
            <select onChange={change} name={name} value={value} className='bg-gray-500 mx-4 rounded-sm px-2' >
                <option value='' disabled >Select {lable}</option>
                {list.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
    </>
  )
}

export default InputBox