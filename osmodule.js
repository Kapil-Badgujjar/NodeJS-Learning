const express = require('express'); 
const app = express();
const port = 3000;
const hostName =  '127.0.0.1';

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.listen(port,hostName);