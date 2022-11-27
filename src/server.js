import express from "express";

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Hello ${req.body.name}!`);
});

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});

