const mongoose = require("mongoose");

mongoose.connect(user).then((result) =>{
    console.log("connected")
}).catch((error) =>{
    console.log(error)
})

export default async function handler(req, res){
 
       let transaction = await transfers.create({
            UserID: "Emenike",
            Transaction:{
                TransactionID:"123",
                senderID: "Emenike",
                recipientID: "Arinze",
                AssetID:"testCoin",
                AssetAmount:100
            }
        })
        res.status(200).json(req.body)
}
