const express=require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config');
const ArticleCtrl=require('../controllers/article');

router.post('/',multer,ArticleCtrl.createArticle);
router.get('/',ArticleCtrl.allArticles);
router.get('/:id',ArticleCtrl.getOneArticle);
router.delete('/:id',ArticleCtrl.deleteArticle);
router.put('/:id',multer,ArticleCtrl.modifyArticle);

module.exports=router;