const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');


router.get('/', async (req, res, next)=>{
    try{
        res.json(await db.select('*').from('accounts'));
    } catch {
        next()
    }
})



module.exports = router;

