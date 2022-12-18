import React, { useEffect, useState } from "react";
import "./Body.css";
import Card from "./card/Card";
import axios from 'axios'

export default function Body() {
  const [memories, setMemories]= useState([])

  useEffect(()=>{
    axios.get("http://localhost:9002/getMemories")
    .then(res=>{
      setMemories(res.data)
    })
  },[memories])

  const cards = memories.map((item)=>{
    return(
      <div key={item.user}>
      <Card memory={item} key={item}/>
      </div>
    )
  })



  return (
    <div className="body">
        <h1>Memories</h1>
        <button id="createMemory" type="button"  ><a href="/create">Create Memory </a></button>       
      <div className="grid">
        {cards}

      </div>

    </div>
  );
}
