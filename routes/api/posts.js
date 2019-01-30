const express = require('express');
const router= express.Router();

//routes: to get  api/posts/test
//Deescription : Test post route
//Access:   Public
router.get('/test', (req, res)=> res.json({msg: "Posts is working"})) ;

module.exports= router;

