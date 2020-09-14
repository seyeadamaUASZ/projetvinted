const express=require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config');
const CategorieCtrl = require('../controllers/categorie');

router.post('/',multer,CategorieCtrl.creatingCategorie);
router.get('/',CategorieCtrl.allCategories);
router.get('/:id',CategorieCtrl.getOneCategorie);
router.delete('/:id',CategorieCtrl.deleteCategorie);
router.put('/:id',CategorieCtrl.modifyingCategorie);
module.exports = router;