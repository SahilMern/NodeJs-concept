const mongoose = require("mongoose");

const userPostSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"postpopulate"
        }
    ]
});

const UserPost = mongoose.model("userpostpopulate", userPostSchema);
module.exports = UserPost;
