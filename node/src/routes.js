const express = require('express');
const crypto = require('crypto');
const connetion = require('./dataBase/connection');
const routes = express.Router();


routes.get('/users', async(req, res)=>{
    const users = await connection('users').select('*');
    console.log()
    res.json(users);
})

routes.post('/users',async (req, res)=>{
    const {nome, email, idade, empresa} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('users').insert({
        id,
        nome,
        email,
        idade,
        empresa
    })
    res.json({id})
})

module.exports = routes;