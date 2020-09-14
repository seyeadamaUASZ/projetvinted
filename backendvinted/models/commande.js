const mongoose = require('mongoose');
const commandeSchema = mongoose.Schema({
    articleId:{type:String,required:true},
    userId:{type:String,required:true},
    dateCommande:{type:Date},
    etatCommande:{type:Boolean,required:false}
})
module.exports = mongoose.model('Commande',commandeSchema);