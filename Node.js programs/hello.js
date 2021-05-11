const  express  =  require('express')
const  bodyParser  =require('body-parser')
var mysql = require('mysql');  
const  app  =  express()
const  port  = 3000


app.use(bodyParser.urlencoded({extended:  false}))
app.set('view engine',  'pug')
app.get('/',  function  (req,  res)  {
  res.sendFile('index.html',  {  root:__dirname  })
});

var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",  
database: "mydb1"  
});  

con.connect(function(err) {  
if (err) throw err;  
  console.log("Connected!");  
});
app.post('/submit',  function  (req,  res)  {
    console.log(req.body);
    var sql="insert into nme values('"+req.body.first_name+"',  '"+req.body.last_name+"')";
    con.query(sql,  function  (err,   rows,  fields){
    if (err) throw err
      console.log('1 user added');
    });
    con.end();
});


app.listen(port,  ()  =>  console.log('Example app listening on port ${port}!'))