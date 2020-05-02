
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const routerApi = require('./routes/routes-api');

const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: ["application/json"] }));

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tee-time",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

app.get(
    '/api/test',
    (req, res) => {
        // console.log(req);
        res.json(
            [{"This is test data":"if you see this, the front end and back end are communicating."}]
        )
        }
);

app.use('/api',routerApi)

app.listen(
    PORT,
    () => console.log(`Welcome to port ${PORT}! You are going to rock your day!`)
);

io.on("connection", socket => {
  console.log("A user has entered Chat");
});
