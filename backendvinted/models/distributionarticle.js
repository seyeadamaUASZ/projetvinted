const mongoose=require('mongoose');
const distributionSchema=mongoose.Schema({
    commandeId:{type:String,required:true},
    typeDistribution:{type:String,required:true},
})
module.exports=mongoose.model('Distribution',distributionSchema);