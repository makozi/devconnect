const express = require('express');
const router= express.Router();

//routes: to get  api/Profile/test
//Deescription : Test profile route
//Access:   Public
router.get('/test', (req, res)=> res.json({msg: "Profile is working"})) ;

module.exports= router;

