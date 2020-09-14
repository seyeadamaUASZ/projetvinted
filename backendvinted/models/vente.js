const mongoose=require('mongoose');
const venteSchema=mongoose.Schema({
    commandeId:{type:String,required:true},
    dateVente:{type:Date,required:true},
    countVente:{type:Number,required:true},
})
module.exports=mongoose.model('Vente',venteSchema);