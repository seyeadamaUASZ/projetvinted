const mongoose = require("mongoose");
const categorieSchema = mongoose.Schema({
    nomCategorie:{type:String,required:true},
    photoCat:{type:String,required:true},
});

module.exports = mongoose.model('Categorie',categorieSchema);