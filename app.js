const express = require('express');
const bodyparser = require('body-parser');
const app = express()
const port = require('./config/constant');
const studentRouter = require('./router/student')


app.use(bodyparser.json());
app.use(studentRouter)

app.get('/mongo',(req,res)=>{
    res.send({message:"the connection is set"})
})

app.listen(port,()=>{
console.log(`Server is running at ${port}`)
});