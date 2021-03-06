const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min: 3,
        max: 20,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        max: 50,
    },
    password:
    {
        type:String,
        require:true,
        min:6
    },
    profilePicture:{
        type: String,
        default:"",
    },
    CoverPicture:{
        type: String,
        default:"",
    },
    Followers:{
        type:Array,
        default:[]
    },
    Following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
);


module.exports = mongoose.model('User',UserSchema);