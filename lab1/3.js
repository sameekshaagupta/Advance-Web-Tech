const express = require('express')
const app = express();

app.get('/hello',(re,resp)=>{
    resp.send("Hellooooooo")
})
app.use('/', (req,resp)=>{
    resp.send("serverrr")
})

app.listen(5000, ()=>{
    console.log('running')
})