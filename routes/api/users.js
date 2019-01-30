const express = require('express');
const router= express.Router();


//routes: to get  api/users/test
//Deescription : Test users route
//Access:   Public
router.get('/test', (req, res)=> res.json({msg: "Users is working"})) ;

module.exports= router;

