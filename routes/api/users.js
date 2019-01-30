const express = require('express');
const router= express.Router();

router.get('/test', (req, res)=> res.json({msg: "Users is working"})) ;

module.exports= router;

