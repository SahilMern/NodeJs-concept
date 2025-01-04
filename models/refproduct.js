//TODO:-Using for refrence 
const mongoose = require("mongoose")
const productRef = new mongoose({
    productId:{
        type:Number,
        required:true,
        unique:true
    },
    buyByUser:[
        {
            type:String,
            
        }
    ]
})