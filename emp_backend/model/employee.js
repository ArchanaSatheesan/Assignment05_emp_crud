var Mongoose=require("mongoose");
 
const EmployeeSchema=Mongoose.Schema(
    {
        name:String,
        location:String,
        position:String,
        email:String,
        password:String,
        salary:Number
    }
);
var EmployeeModel=Mongoose.model("Employees",EmployeeSchema);
module.exports={EmployeeModel};