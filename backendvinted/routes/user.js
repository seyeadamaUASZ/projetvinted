const express = require('express');
const router =express.Router();

const UserCtrl = require('../controllers/user');
//const multer = require('../middlewares/multer-config');

router.post('/login',UserCtrl.login);
router.post('/signup',UserCtrl.signup);

module.exports = router;