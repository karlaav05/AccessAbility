const express = require('express');
const mongoose = require("mongoose");
var cors = require('cors')
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://0251568:KaAv_0050804@cluster0.mo96f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: {type: String, select: false}
});

const gameSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    game: String,
    score: Number
});

const User = mongoose.model("User", userSchema);
const Game = mongoose.model("Game", gameSchema);

app.use(async (req, res, next) => {
    req.users = await User.find({});
    req.games = await Game.find({}).populate("user");
    next();
});

app.post("/login", async (req, res) => {
    let userData = req.body;
    let user = await User.find({username: userData.username, password:userData.password});
    console.log(userData);
    if(user.length > 0){
        res.send(user);
    } else {
        res.sendStatus(401);
    }
});


// User CRUD - No Delete
app.post("/user", async (req, res) => {
    let userData = req.body;
    let existing = await User.find(userData);
    if(existing.length > 0){
        res.sendStatus(400);
    } else {
        let user = new User(userData);
        user = (await user.save()).toObject();
        delete user.password;
        res.send(user);
    }
});

app.patch("/users/:id", async (req, res) => {
    let userData = req.body;
    let existing = await User.find(userData);
    if(existing.length > 0){
        res.sendStatus(400);
    } else {
        let user = await User.findByIdAndUpdate(req.params.id, userData, {new: true});
        res.send(user);
    }
});

app.get("/users/:id", async (req, res) => {
    let user = await User.findById(req.params.id);
    res.send(user);
});

// Score CRUD - No Delete
app.post("/score/:game", async (req, res) => {
    let scoreData = req.body;
    let user = await User.findById(scoreData.userId);
    let existing = await Game.find({game: req.params.game, user: user});
    if(user && !existing.length > 0){
        let score = new Game({user: user, game: req.params.game, score: scoreData.score});
        score = await score.save();
        res.send(score);
    } else {
        res.sendStatus(400);
    }
});

app.patch("/score/:game", async (req, res) => {
    let scoreData = req.body;
    let existing = await User.findById(scoreData.userId);
    if(existing){
        let score = await Game.findOneAndUpdate({game: req.params.game, user: existing}, {score: scoreData.score}, {new: true});
        res.send(score);
    } else {
        res.sendStatus(400);
    }
});

app.get("/score/:game/:userId", async (req, res) => {
    let user = await User.findById(req.params.userId);
    if(user){
        let game = await Game.find({user: user, game: req.params.game});
        res.send(game);
    } else {
        res.sendStatus(400);
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});