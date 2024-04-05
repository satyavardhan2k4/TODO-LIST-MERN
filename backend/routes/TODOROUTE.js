// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// // Parse URL-encoded bodies (for forms)
// app.use(bodyParser.urlencoded({ extended: false }));

// // Parse JSON bodies (for JSON data)
// app.use(bodyParser.json());

// // Your other middleware and route handlers...




const {Router}=require('express');
const { getToDo, saveToDo,updateToDo,deleteToDo } = require('../controllers/ToDoControllers');
const router=Router();

// router.get('/',(req,res)=>{
//     res.json({message:"Hi there"})
// })



// Handle GET requests to the "/save" endpoint


// router.post('/save',saveToDo)
router.get('/',getToDo)
// router.get('/save',saveToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)

module.exports=router;