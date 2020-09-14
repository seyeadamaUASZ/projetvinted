const express=require('express');
const router=express.Router();

const CommandeCtrl=require('../controllers/commande');

router.post('/',CommandeCtrl.createCommande);
router.get('/',CommandeCtrl.allCommandes);
router.get('/:id',CommandeCtrl.getOneCommande);

module.exports=router;

