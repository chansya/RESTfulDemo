const express = require('express');
const app = express();

// middleware to tell express to parse post request
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.get('/tacos', (req,res)=>{
    res.send('GET /tacos response')
})

app.post('/tacos', (req,res)=>{
    const {meat, qty} = req.body; 
    res.send(`You requested ${qty} ${meat} taco`)
})

app.listen(3000, ()=>{
    console.log("On port 3000")
})