const express = require('express');
const app = express();
const path = require('path');

// middleware to tell express to parse post request
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');

const comments = [
    {
        username: 'Todd',
        comment: 'hahaha'
    },
    {
        username: 'Tedd',
        comment: 'hehehe'
    },
    {
        username: 'Tudd',
        comment: 'huhuhu'
    },
    {
        username: 'Tadd',
        comment: 'hohoho'
    },
]

app.get('/comments', (req,res)=>{
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res)=>{
    res.render('comments/new')
})

app.post('/comments', (req,res)=>{
    console.log(req.body)
    const {username, comment} = req.body;
    comments.push({username, comment})
    res.send('It worked.')
})

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