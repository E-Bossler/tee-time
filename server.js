const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: ["application/json"] }));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/7777", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.get(
    '/api/test',
    (req, res) => {
        // console.log(req);
        res.json(
            [{"This is test data":"if you see this, the front end and back end are communicating."}]
        )
        }
);

app.listen(PORT, () =>
  console.log(`Welcome to port ${PORT}! You are going to rock your day!`)
);

io.on("connection", socket => {
  console.log("A user has entered Chat");
});
