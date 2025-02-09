const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
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

const Comment = mongoose.model("commentpopulate", commentSchema);
module.exports = Comment;
