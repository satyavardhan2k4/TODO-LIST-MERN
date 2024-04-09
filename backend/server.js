const express= require('express');
const mongoose =require('mongoose');


const app = express();
const cors=require('cors')


// Your routes and other middleware


const routes=require('./routes/TODOROUTE')

require('dotenv').config();


const PORT=process.env.port || 5000;
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log('connencted to mongodb'))
.catch((err)=>console.log(err));

app.use(routes);

app.listen(PORT,()=>console.log(`listening on port ${PORT}`));

