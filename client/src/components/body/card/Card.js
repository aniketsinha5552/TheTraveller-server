import React from 'react'
import './Card.css'
import axios from 'axios'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Card({memory}) {
 function deleteMemory(memory){
      const id= memory._id
      axios.delete(`http://localhost:9002/delete/${id}`)
 }

  return (
    <div className='card'>
      <img src={memory.url?`${memory.url}`:"https://static2.tripoto.com/media/filter/tst/img/4335/TripDocument/1471437626_famous_hill_stations_in_india.jpg"} alt=""></img>
      <h3 id="title">{memory.location}</h3>
      <div id="details">
      <p>Date: {memory.date}</p>
      <p>Location: {memory.city}</p>
      <p>User: {memory.user}</p>
      <p>About: {memory.desc}</p>
      </div>
      <button id='deleteMem' onClick={()=>deleteMemory(memory)}><DeleteOutlineIcon/></button>
    </div>
  )
}
