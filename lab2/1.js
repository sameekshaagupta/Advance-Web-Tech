const http = require("http")
const FS = require('fs')

const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}: New request  received\n`
    FS.appendFile('log.txt', log, (err)=>{
        if(err){
            console.log('error writing to file:',err);
        }
        res.end('heello')
    })
})
myserver.listen(3000, ()=>{
    console.log("Server is running in 3000");
})