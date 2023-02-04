// Task1: initiate app and run server at 3000
var express=require("express");
var Bodyparser=require("body-parser");
var Cors=require("cors");
var Mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

var {EmployeeModel}=require("./model/employee");
var app=new express();
app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({extended:false}));



const path=require('path');
app.use(express.static(path.join(__dirname + "/build")));
// Task2: create mongoDB connection 
Mongoose.connect("mongodb+srv://archanasatheesan:archanasatheesan@cluster0.zb7ujpa.mongodb.net/Employeefulldb?retryWrites=true&w=majority",{useNewUrlParser:true});

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

//LOGIN api


app.post("/api/signin",(req,res)=>{
    var getEmail=req.body.email
      var password=req.body.password
  
      let result=userModel.find({email:getEmail},(err,data)=>{
  
          if(data.length>0){
              const passwordValidator=bcrpt.compareSync(password,data[0].password)
              if(passwordValidator){
  
                  jwt.sign({email:getEmail,id:data[0]._id},"ictacademy",{expiresIn:"1d"},
                  
                  (err,token)=>{
                      if (err) {
                          res.json({"status":"error","error":err})
  
                      } else {
                          res.json({"status":"success","data":data,"token":token})
                          
                      }
  
                  })
  
                  
  
              }
              else{
                  res.json({"status":"failed","data":"invalid password"})
  
              }
  
          }
  
          else{
              res.json({"status":"failed","data":"invalid email id"})
  
          }
  
      })
  
  
  })
  






//TODO: get data from db  using api '/api/employeelist'
app.get("/api/employeelist", async (req, res) => {
    try {
      const data = await EmployeeModel.find();
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


//TODO: get single data from db  using api '/api/employeelist/:id'
app.get("/api/employeelist/:id", async (req, res) => {
    try {
      const datas = await EmployeeModel.findById(req.params.id);
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post("/api/employeelist", async (req, res) => {
    const data = new EmployeeModel({
      name: req.body.name,
      location: req.body.location,
      position: req.body.position,
      salary: req.body.salary,
    });
    try {
      const Data = await data.save();
      res.status(200).json(Data);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete("/api/employeelist/:id", async (req, res) => {
    try {
      var id = req.params.id;
      var data = req.body;
      const result = await EmployeeModel.findOneAndDelete({ _id: id }, data);
      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put("/api/employeelist", (req, res) => {
    var name = req.body.name;
    var data = req.body;
    EmployeeModel.findOneAndUpdate({ name: name }, data, (err, data) => {
      if (err) {
        res.json({ status: "error", error: err });
      } else {
        res.json({ status: "updated", data: data });
      }
    });
  });

//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8000,()=>{
 console.log("server is running in port 8000")
});

