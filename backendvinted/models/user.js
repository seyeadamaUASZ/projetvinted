const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    email:{type:String,required:false},
    login:{type:String,required:true},
    telephone:{type:String,required:true},
    adresse:{type:String,required:true},
    motdepasse:{type:String,required:true},
    typeUser:{type:String,default:'user',required:true},
    photo:{type:String,required:false},

});

module.exports = mongoose.model('User',userSchema);