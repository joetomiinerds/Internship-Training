const express=  require('express')
const path=require('path')
const hoganMiddeleware=require('hogan-middleware')
const app =  express()
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddeleware.__express)
app.use(express.static(path.join(__dirname,'public')))
// app.get('/',(req,res,next)=>{

//     res.send("hello")
// })
// app.get('/json',(req,res,next)=>{
//     const data ={
//         greeting:'Hello'
//     }
//     res.json(data)
// })
// app.get('/home',(req,res,next)=>{
//     res.render('home',null)
// })
const indexRouter=require('./routes/index')
app.use('/',indexRouter)
app.listen(3000)
console.log("server running in https://localhost:3000")