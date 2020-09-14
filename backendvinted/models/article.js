const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    titre:{type:String,required:true},
    description:{type:String,required:true},
    photoUrl:{type:String,required:true},
    prix:{type:Number,required:true},
    quantite:{type:Number,required:true},
    userId:{type:String,required:true},
});

module.exports=mongoose.model('Article',articleSchema);