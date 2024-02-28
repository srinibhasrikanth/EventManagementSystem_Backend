const mongoose=require('mongoose')

const coreSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    linkedin:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        required: true,
    },
    position:{
        type: String,
        required: true,
    },
    batch:{
        type: String,
        required: true,
    },
},{timestamps:true})

const coreModel=new mongoose.model("core",coreSchema);
module.exports=coreModel;