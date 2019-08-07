const { Schema, model} = require('mongoose');

const DevSchema = new Schema({
   login:{
       type:String, 
       required:true,
   },
   name:{
    type:String, 
    required:true,
   },
   bio:String,
   avatar_url:{
    type:String, 
    required:true,
   }
},
{timestamps:true});
module.exports = model('Dev' , DevSchema);