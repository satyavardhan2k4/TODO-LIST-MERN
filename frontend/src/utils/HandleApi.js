import axios from 'axios';

const baseurl="http://localhost:5000"

const getAllToDo=(setToDo)=>{
    axios.get(baseurl)
    .then(({data})=>{
        console.log('data-->',data);
        setToDo(data);
    })
    .catch((err)=>console.log(err));

}

const addToDo=(text,setText,setTodo)=>{

    axios.post(`${baseurl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("");
        getAllToDo(setTodo);
    })
    .catch((err)=>console.log(err));


}

const updateToDo=(toDoId,text,setToDo,setText,setIsUpdating)=>{

    axios.post(`${baseurl}/update`,{_id: toDoId,text})
    .then((data)=>{
        
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo);
        
    })
    .catch((err)=>console.log(err));

}




const deleteToDo=(_id,setToDo)=>{

    axios.post(`${baseurl}/delete`,{_id})
    .then((data)=>{
        console.log(data)
        getAllToDo(setToDo);
        
    })
    .catch((err)=>console.log(err));

}






export {getAllToDo,addToDo,updateToDo,deleteToDo};
