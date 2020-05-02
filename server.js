const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routerApi = require("./routes/routes-api");
const PORT = process.env.PORT || 7777;
var server = app.listen(PORT, () =>
  console.log(`Welcome to port ${PORT}! You are going to rock your day!`)
);
const io = require("socket.io")(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: ["application/json"] }));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tee-time", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.get("/api/test", (req, res) => {
  // console.log(req);
  res.json([
    {
      "This is test data":
        "if you see this, the front end and back end are communicating.",
    },
  ]);
});

app.get("/", (req, res) => {
  res.send("You are now connected to your dev server.");
});

app.use("/api", routerApi);

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("chat message", msg => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});
