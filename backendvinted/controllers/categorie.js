const Categorie = require('../models/categorie');

exports.creatingCategorie=(req,res,next)=>{
    const categorie = new Categorie({
        nomCategorie:req.body.nomCategorie,
        photoCat: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    });
    categorie.save()
    .then(()=>res.status(201).json({message:'categorie enregistrée !!!',status:'OK'}))
    .catch(error => res.status(400).json({ error }));
};

exports.allCategories=(req,res,next)=>{
    Categorie.find().then(
        (categories)=>{
            res.status(200).json(categories);
        }
    ).catch(
        (error)=>{
            res.status(400).json({
                error:error
            });
        }
    );
};
exports.getOneCategorie=(req,res,next)=>{
    Categorie.findOne({
        _id:req.params.id
    }).then(
        (categorie)=>{
            res.status(200).json(categorie);
        }
    ).catch(
        (error)=>{
            res.status(404).json({
                error:error
            });
        }
    );
};

exports.modifyingCategorie=(req,res,next)=>{
    Categorie.updateOne({_id:req.params.id},{nomCategorie:req.body.nomCategorie,_id:req.params.id})
    .then(()=>res.status(200).json({message:'categorie modifiee !!!'}))
    .catch(error=>res.status(400).json({message:'impossible de supprimer !!!'}));
}

exports.deleteCategorie=(req,res,next)=>{
    Categorie.deleteOne({
        _id:req.params.id
    }).then(()=>res.status(200).json({message:'categorie supprimée !!!'}))
    .catch(error=>res.status(400).json({message:'impossible de supprimer !!!'}));
};