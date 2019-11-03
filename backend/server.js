const express = require('express');
const mongoose = require('mongoose');

const cors = reqire ('cors'); 


require('dotenv').config(); // dotenv vanne env variable configure garxa

const app  = express();   // yeha express server create hunxa, 
const  port = process.env.PORT || 5000; 

app.use(cors()); // middleware
app.use(express.json()); // this allows to parsse the json

app.listen(port, () => {
   console.log('server is running on port : ${port}');
});