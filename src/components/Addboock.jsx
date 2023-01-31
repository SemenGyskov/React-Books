import React from "react";
import { useState } from "react";

function Addboock(){
    const initBooks=[] 

      const[books,setBooks]=useState(initBooks)
      const[value,setValue]=useState('')
      const result = books.map((book,index)=>{
        return <p key={index}>{book}</p>
      })
      return (
        <div className="App">
         {result} 
         Название <input value={value} onChange={event => setValue(event.target.value)}/>
         <button onClick={()=> setBooks([...books, value])}>Добавить книгу</button>
        </div>
      );}
      export default Addboock;