const express = require('express');
const app = express();
const bodyparser = require('body-parser');

// app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json()); // this is the middleware logic to verify if the data is malicious or not

const PORT = 3000;
let bloglist = [];

app.get('/blogs',(req,res) => {
    return res.status(200).json({
        data : bloglist,
        success : true
    });
});

app.get(`/blogs/:id`,(req,res) => {
    console.log(req.params);
    
    let obj = bloglist.filter((elem) => elem.id == req.params.id)
    return res.status(200).json({
        data : obj,
        success : true
    });
})

app.post('/blogs',(req,res) => {
    bloglist.push({
        name : req.body.name,
        roll : req.body.roll,
        branch : req.body.branch,
        id: req.body.id
    });
    console.log(bloglist);
    return res.status(201).json({
        success : true
    });
})

app.delete('/blogs/:id',(req,res) => {
    let newarr = bloglist.filter((elem) => elem.id != req.params.id);
    bloglist = newarr;

    return res.status(200).json({
        success : true
    })
})

app.listen(PORT,() => {
    console.log("Server started at PORT : ",PORT);
    
});