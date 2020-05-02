const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: ['application/json'] }));

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/7777",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

app.get(
    '/api/test',
    (req, res) => {
        console.log(req);
        res.json(
            [{"hi":"hello"}]
        )
        }
);

app.listen(
    PORT,
    () => console.log(`Welcome to port ${PORT}! You are going to rock your day!`)
);
