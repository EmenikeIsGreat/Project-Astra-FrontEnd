const mongoose = require("mongoose");
const user = require('./user')
mongoose.connect(user).then((result) =>{
    console.log("connected")
}).catch((error) =>{
    console.log(error)
})



export default function handler(req, res) {
    try{
        let message = user.create({
             UserID:"EmenikeID2",
             firstName:"Emenike",
             lastName:"Anigbogu",
             userName:"DarkChocolate",
             email:"emenikeani3@gmail.com",
             phoneNumber:"6172869610"
             })
         console.log(message)
     }
 
     catch(error){
         console.log(error);
     }
    res.status(200).json(message)
  }