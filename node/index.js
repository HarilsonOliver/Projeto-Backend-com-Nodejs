const express = require('express');

const app = express();
app.use(express.json());



app.get('/users', (req, res) =>{
    const params = req.query;
    console.log(params)
    res.json(params})
})

app.post('/users/:id', (req, res) =>{
    const params = req.params;
    console.log(params)
    res.json(params)
})

app.post('/users/', (req, res) =>{
    const params = req.body;
    console.log(params)
    res.json(params)
})

/*
app.put('/users', (req, res) =>{
    res.json({
        nome:"harilson"
        empresa:"UESB"

    })
})
*/

app.listen(3001);