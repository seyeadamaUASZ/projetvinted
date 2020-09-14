const Commande = require('../models/commande');
const auth = require('../middlewares/auth');

exports.createCommande=(req,res,next)=>{
   const token = req.headers.authorization.split(' ')[1]; 
   const userId = auth.getTypeUser(token);
   if(userId!=null){
       const commande = new Commande({
           articleId:req.body.articleId,
           dateCommande:new Date(),
           userId:userId,
           etatCommande:false
       });
       commande.save()
       .then(()=>res.status(201).json({message:'commande créée !!!',status:'OK'}))
       .catch(error=>res.status(400).json({error:error}))
   }else{
       res.status(401).json({message:'UserId not found !!!',status:'KO'})
   }
};

exports.allCommandes=(req,res,next)=>{
  Commande.find()
   .then(commandes=>{
       res.status(200).json(commandes)
   })
   .catch(res.status(500).json('error loading commande !!!'));
};

exports.getOneCommande=(req,res,next)=>{
  
};

exports.deleteCommande=(req,res,next)=>{

};

exports.modifyingCommande=(req,res,next)=>{

};