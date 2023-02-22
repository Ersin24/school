const express = require('express');

const router = express.Router();

router.get('/hikayeler', function(req, res){
    res.render('user/posts/all-posts')
})

module.exports = router;