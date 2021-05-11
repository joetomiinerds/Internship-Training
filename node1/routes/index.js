const express= require('express')
const router=express.Router()
router.get('/',(req,res,next)=>{
    res.send('Hello World from routs')
})
router.get('/home',(req,res,next)=> {
    res.render('home',null)
})
router.get('/json',(req,res,next)=>{
    res.json({
        greetings:"Hello from json in routes"
    })
})
module.exports= router