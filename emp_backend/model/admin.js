var Mongoose=require("mongoose");
 
const AdminSchema=Mongoose.Schema(
    {
        name:String,
        
        
        email:String,
        password:String
    
    }
);
var AdminModel=Mongoose.model("employeedetails",AdminSchema);
module.exports={AdminModel};