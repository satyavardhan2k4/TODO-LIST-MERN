const ToDoModel=require('../models/ToDoModel');


module.exports.getToDo=async (req,res)=>{
    const toDo=await ToDoModel.find(); //All ToDo's will be accessed with find() ToDo is the name given to collection in a model by us check todomodel.js
    res.send(toDo)

}

module.exports.saveToDo=async (req,res)=>{
    const {text} =req.body;  //destructuring coz our schema takes in a text;



    ToDoModel.create({text})
    .then((data)=>{
        console.log("added successfully...")
        console.log(data)
        res.send(data)
    }) 
   

}

module.exports.updateToDo=async (req,res)=>{
    const {_id,text}=req.body;


    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>{
        res.send("updated successfully....")})
        .catch((err)=>console.log(err))
    
}



module.exports.deleteToDo=async (req,res)=>{
    const {_id}=req.body;


    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>{
        res.send("deleted successfully....")})
        .catch((err)=>console.log(err))
    
}
