const http = require('http');

const PORT = 3001;

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.end("This is the main page");
        console.log("On the main page");
        
    }
    else if(req.url == '/home'){
        res.end("This is the home page");
        console.log("On the home page");
        
    }
    else if(req.url == '/product'){
        res.end("This is the products page");
        console.log("On the porducts page");
        
    }
    else if(req.url == '/doubt'){
        res.end("This is the doubt page");
        console.log("On the doubt page");
        
    }
});

server.listen(PORT,() => {
    console.log("Server running on port : ",PORT);
    
});