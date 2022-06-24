const mongoose = require('mongoose');

const User = new mongoose.Schema({
    UserID:{
        type:String,
        required:String
    },
    
    firstName:{
        type: String,
        requried: true
    },

    lastName:{
        type: String,
        requried: true
    },

    userName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:String,
        required: true
    },

    photoURL: String,

    following: Number,

    followers: Number,

    createdAsset: String,
    
    Balances: [JSON],

    },

    { timestamps: true },
)

module.exports = mongoose.model('User', User)