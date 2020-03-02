const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');


router.get('/', async (req, res, next)=>{
    try{
        res.json(await db.select('*').from('accounts'));
    } catch {
        next()
    }
});


router.get('/:id/', async (req, res, next)=>{
    try {
        res.json(await db.table('accounts').where({id: req.params.id}))        
    } catch {
        next()
    }
})

router.post('/', async (req, res, next)=>{
    try {
        const user = await db('accounts').insert({name: 'Test' + Math.random(), budget: req.body.budget});
        res.json(await db('accounts').where({id: user[0]}))
        
    } catch {
        next();
    }
})

router.put('/:id', async (req, res, next) =>{
    try {
        res.json(await db('accounts').where('id', '=', req.params.id).update({name: req.body.name, budget: req.body.budget}))
    } catch(err) {
        console.log(err)
        next()
    }
} )

router.delete('/:id', async (req, res, next) =>{
    try {
        res.json(await db('accounts').where("id", "=", req.params.id).del())
    } catch {
        next()
    }
})


module.exports = router;

