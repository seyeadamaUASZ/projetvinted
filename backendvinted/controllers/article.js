const Article=require('../models/article');
const auth = require('../middlewares/auth');
const fs = require('fs');

exports.createArticle=(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    const userId = auth.getUserId(token)
    if(userId!=null){
        const article = new Article({
        titre:req.body.titre,
        description:req.body.description,
        photoUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        prix:parseInt(req.body.prix),
        quantite:parseInt(req.body.quantite),
        userId:userId
       });
       article.save()
        .then(res.status(201).json({message:'Article saved successfully !!'}))
        .catch(error=>res.status(401).json({error:error}));
    }else{
       res.status(401).json({message:'userId is null'})
    }
};

exports.allArticles=(req,res,next)=>{
   Article.find().then(
       (articles)=>{
           res.status(200).json(articles);
       }
   ).catch(
       (error)=>{
           res.status(400).json({error:error});
       }
   );
};

exports.getOneArticle=(req,res,next)=>{
   Article.findOne({
       _id:req.params.id
   }).then(
       (article)=>{
           res.status(200).json(article);
       }
   ).catch(
       (error)=>{
           res.status(404).json({
               error:error
           });
       }
   );
};

exports.modifyArticle=(req,res,next)=>{

};

exports.deleteArticle=(req,res,next)=>{
  Article.findOne({_id:req.params.id})
  .then(article=>{
      const filename = article.photoUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`,()=>{
          Article.deleteOne({_id:req.params.id})
          .then(()=>res.status(200).json({message:'Article deleted !!!'}))
          .catch(error=>res.status(400).json({error:error}))
      });
  })
  .catch(error=>res.status(500).json({error:error}))
};