const express= require('express');
let cors=require('cors');
let bodyParser=require('body-parser');
var mysql = require('mysql');
const app=express();
app.use(bodyParser())
app.use(cors())
app.get("/demo",(req,res)=>{
  console.log("Here");
})
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mohit555",
    database: "mydbase"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  app.get("/",(req,res)=>{
    res.send("Hello")
  })
  app.get("/question",(req,res)=>{
    con.query("SELECT * FROM survey",function(err,result,fields){
      if(err) throw err;
      console.log(result);
    });
  })
  app.post("/question",(req,res)=>{
    let question=req.body
    console.log("Question is",question)
    var sql="INSERT INTO customers (type,id,question,options) VALUES ('Company Inc', '37','hlw','1')";
    console.log(req.body)
    con.query(sql, function (err, result) {
    if (err) throw err;
      console.log("1 record inserted");
    });
  })
  

app.listen('3008',() =>{
    console.log('running');
})
