const http = require("http");

http.createServer((req,resp)=>{
    resp.write("hello")
    resp.end();
    console.log("hello")
}).listen(5500)