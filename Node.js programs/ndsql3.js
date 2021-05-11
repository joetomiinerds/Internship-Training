var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",  
database: "mydb1"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1',  'AjeetKumar',  '27',  'Allahabad')";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
});
});  