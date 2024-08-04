const http = require('http');

const PORT = 3000;

const server = http.createServer((request,response) => {
    // console.log(request.url);
    console.log(request.method);
    
    if(request.url == '/home'){
        response.end("Welcome to home");
    }
    else if(request.url == '/faq'){
        response.end("Welcome to faq");
    }
    else{
        response.end('Hello World');
    }
    
})

server.listen(PORT , () => {
    console.log("Server is running on port : ",PORT);
    
});