
import React from 'react';
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";

const ToDo = ({text,updateMode,deleteToDo}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>

        
        <div className="icons">
            <BiEdit className="icon" onClick={updateMode}/>          
            <AiFillDelete className="icon" onClick={deleteToDo}/>    
        </div>
        {/*this div is making use of react icons
        //available in react library
        //for this we have to npm i react-icons which will provide us with the componenets like:-
        BiEdit and AiFillDelete*/}



    </div>
  )
}

export default ToDo