// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */
const profiles={
  joe35:{
    username:'joe35',
    image:'/images/download.jfif',
    name:'Joe Tom',
    company:'IIM',
    language:['js','Python','c++']
  },
  jubin36:{
    username:'jubin36',
    image:'/images/download (1).jfif',
    name:'Jubin Shaji',
    company:'TCS',
    language:['js','Python','C']
  }
}

  router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})

// router.post('/post',(req,res)=>{
//   const body=req.body

//   res.json({
//     conformation:'success',
//     data:body
//   })
// })

router.get('/query',(req,res)=>{
  const name=req.query.name
  const occupation=req.query.occupation
  const data={
    name:name,
    occupation:occupation
  }
  res.render('profile',data)
})
router.get('/profiles',(req,res)=>{
  const keys=Object.keys(profiles)
  const list=[]
  keys.forEach(key=>{
    list.push(profiles[key])
  })


  const data={
    profiles:list,
    timestamp:req.timestamp
  }
  res.render('profiles',data)
})

router.post('/addprofile',(req,res)=>{
  const body=req.body
  body['language']=req.body.language.split(",")
  profiles[body.username]=body
  res.redirect('/profile/'+body.username)
})
router.get('/:profile/:username',(req,res)=>{
  const profile=req.params.profile
  const username=req.params.username
  const profilenm=profiles[username]
  
  if(profilenm ==null){
    res.json({
      confirmation:'fail',
      message:'profile '+username +' not valid!!'
    })
  }
 
  profilenm.timestamp=req.timestamp
  res.render('profile',profilenm)
})

module.exports = router
