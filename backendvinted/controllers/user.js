const User=require('../models/user');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup=(req,res,next)=>{
 bcrypt.hash(req.body.motdepasse,10)
 .then(hash=>{
     const user = new User({
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        telephone:req.body.telephone,
        adresse:req.body.adresse,
        login:req.body.login,
        motdepasse:hash,
        typeUser:req.body.typeUser,
     });
     user.save()
     .then(()=>res.status(201).json({message:'user successfully !!!',status:'OK'}))
     .catch(error=>
        console.log(error)
        //res.status(400).json({message:'Bad Request !!!'})
        )
 })
 .catch(error=>
    console.log(error)
    )
};

exports.login=(req,res,next)=>{
    User.findOne({login:req.body.login})
    .then(user=>{
        if(!user){
            return res.status(401).json({error:'Utilisateur non trouvé !!',status:'KO'})
        }
        bcrypt.compare(req.body.motdepasse,user.motdepasse)
        .then(valid=>{
            if(!valid){
                return res.status(401).json({error:'Mot de passe incorrecte !!!'});
            }
            res.status(200).json({
                userId:user._id,
                token:jwt.sign(
                    {userId:user._id,typeUser:user.typeUser},
                    'RANDOM_TOKEN_SECRET',
                    {expiresIn:'24h'}
                )
            });
        })
        .catch(error=>res.status(500).json({error}))
    })
    .catch(error => res.status(500).json({ error }));
}