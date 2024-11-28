const express = require('express');
const app = express();

const PORT = 3000;
const WORDLE_TRIES = 6;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/games', (req, res) => {
    res.render('games');
});

app.get('/crossword-cognitive', (req, res) => {
    res.render('crossword_cognitive');
});

app.get('/crossword-physical', (req, res) => {
    res.render('crossword_physical');
});

app.get('/crossword-visual', (req, res) => {
    res.render('crossword_visual');
});

app.get('/wordle-cognitive', (req,res) => {
    res.render('wordle', { type:"Cognitive", solution: "SOCIAL", tries: WORDLE_TRIES });
});

app.get('/wordle-physical', (req,res) => {
    res.render('wordle', { type:"Physical", solution: "PHYSICAL", tries: WORDLE_TRIES });
});

app.get('/wordle-visual', (req,res) => {
    res.render('wordle', { type:"Visual", solution: "BLIND", tries: WORDLE_TRIES });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});