import express from "express";
import mongoose from "mongoose";

let articlesInfo = [
    {
        name: 'learn-react',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'learn-node',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'mongodb',
        upvotes: 0,
        comments: [],
    }]

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://rutuja:rutuja@cluster0.xg61akw.mongodb.net/react_blogs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connection is successfull!"));

app.post('/api/articles/:name/comments', (req, res) => {
    const { postedBy, text } = req.body;
    const { name } = req.params;
    const article = articlesInfo.find(a => a.name === name);
    if (article) {
        article.comments.push({ postedBy, text });
        res.send(article.comments);
    }
    else {
        res.send("That article doesn\'t exists");
    }
});

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find(a => a.name === name);
    if (article) {
        article.upvotes += 1;
        res.send(`The ${name} article has ${article.upvotes} upvotes`);
    }
    else {
        res.send(`That article doesn\'t exist!!`);
    }
});

app.listen(8003, () => {
    console.log('Server is running on port: 8000');
});

