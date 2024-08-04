const express = require('express');

const app = express();
const PORT = 3000;

app.get('/',(req,res) => {
    res.send("This is a GET request");
})

app.post('/home',(req,res) => {
    res.send("This is a POST request");
})

app.patch('/home',(req,res) => {
    res.send("This is a PATCH request");
})

app.listen(PORT , () => {
    console.log('Server Started');
    
})