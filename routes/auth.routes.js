const express = require('express')

const authController = require('../controllers/auth.controller')

const router = express.Router();


router.get('/uye-ol', authController.getSignup);

router.get('/giris-yap', authController.getLogin);


module.exports = router;