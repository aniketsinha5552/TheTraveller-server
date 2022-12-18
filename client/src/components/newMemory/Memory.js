import React, { useState } from 'react'
import "./Memory.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Memory() {
  const navigate= useNavigate()
  const [memory, setMemory]= useState({
    "user":"",
    "location":"",
    "city":"",
    "desc":"",
    "url":"",
    "date":""
  })

  function handleChange(e){
    if(e.target.placeholder==="User"){
            setMemory({...memory,user: e.target.value})
    }
    else if(e.target.placeholder==="Location Name"){
        setMemory({...memory,location: e.target.value})
    }
    else if(e.target.placeholder==="City/Town"){
        setMemory({...memory,city: e.target.value})
    }
    else if(e.target.placeholder==="Date DD/MM/YY"){
        setMemory({...memory,date: e.target.value})
    }
    else if(e.target.placeholder==="About"){
        setMemory({...memory,desc: e.target.value})
    }
    else if(e.target.placeholder==="Image Url"){
        setMemory({...memory,url: e.target.value})
    }

  }

  function createMemory(){
    console.log(memory)
    const {user, location, city, desc, url,date}= memory
    if(user && location && city && desc && url && date){
      axios.post("http://localhost:9002/createMemory",{
        user,
        location,
        city,
        desc,
        url,
        date
    })
    .then(res=>{
      alert(res.data.message)
      navigate("/")
    })
    } else{
      alert("Please Enter All The Details")
    }
    
  }
  return (
    <div className='Memory'>
        <h2>Travel Details</h2>
        <form id="memoryForm">
            <input placeholder='User' onChange={handleChange}></input>
            <input placeholder='Location Name' onChange={handleChange}></input>
            <input placeholder='City/Town' onChange={handleChange}></input>
            <input placeholder='Date DD/MM/YY' onChange={handleChange}></input>
            <input placeholder='About' onChange={handleChange}></input>
            <input placeholder='Image Url' onChange={handleChange}></input>
            <button id="createBtn" onClick={createMemory} type="button">Create Memory</button>
        </form>
    </div>
  )
}
