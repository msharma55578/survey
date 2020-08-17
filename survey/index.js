const express= require('express');
let cors=require('cors');
let bodyParser=require('body-parser');
var mysql = require('mysql');
const app=express();
app.use(bodyParser())
app.use(cors())
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mohit555"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //con.query("CREATE DATABASE mydbase", function (err, result) {
      //if (err) throw err;
     // console.log("Database created");
   // });
  });
  app.get("/question",(req,res)=>{
    con.query("SELECT * FROM survey",function(err,result,fields){
      if(err) throw err;
      console.log(result);
    });
  })
  app.post("/question",(req,res)=>{
    let question=req.body
    var sql="INSERT INTO customers (type,id,question,option) VALUES ('Company Inc', '37','hlw','1')";
    console.log(request.body)
    con.query(sql, function (err, result) {
    if (err) throw err;
      console.log("1 record inserted");
    });
  })
  

app.listen('8081',() =>{
    console.log('running');
})