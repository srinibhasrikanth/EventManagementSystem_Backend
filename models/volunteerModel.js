const mongoose=require('mongoose')

const volunteerSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    linkedin:{
        type: String,
        required: true,
    },
    team:{
        type: String,
        required: true,
    },
    batch:{
        type: String,
        required: true,
    },
},{timestamps:true})

const volunteerModel=new mongoose.model("volunteer",volunteerSchema);
module.exports=volunteerModel;