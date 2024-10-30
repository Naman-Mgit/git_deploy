const express=require("express")
require('dotenv').config();
const app=express();

app.get('/',(req,res)=>{
     res.send("Hello World")
})
app.get('/login',(req,res)=>{
     res.send("<h1>This is a login page!!</h1>")
})
app.listen(process.env.PORT,()=>{
     console.log(`Server is running at port ${process.env.PORT}`)
})