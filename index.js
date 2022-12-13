const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
require('dotenv').config({path: __dirname + '/.env'})
const app = express();
app.use(cors({
  origin: "*"
}))
app.use(express.json());
var router = require('./mainrouter');

app.listen(5000, () => {
    console.log('Server Started')
});

mongoose.connect(process.env.Mongo_Url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log('Connected to mongo server');
  }).catch(err=>{
    console.log(err);
});
app.use(router);
