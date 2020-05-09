const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const http = require("http");
const mongoose = require("mongoose");
const router = require("./Backend/routes/routes-api");
const PORT = process.env.PORT || 7777;
var server = http.createServer(app);
const io = require("socket.io")(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: ["application/json"] }));

app.use(express.static("public"));

app.use(bodyParser());

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

app.use("/api", router);

server.listen(PORT, () =>
  console.log(`Welcome to port ${PORT}! You are going to rock your day!`)
);

let interval;

io.on("connection", socket => {
  console.log("a user connected :D");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
  socket.on("chat message", msg => {
    console.log(msg);
    // Emits to all clients
    io.emit("chat message", msg);
  });

  // Everybody but client connecting
  socket.broadcast.emit("message", "User has joined the chat.");

  //Runs at client disconnect
  socket.on("disconnect", () => {
    io.emit("message", "A User has left the chat.");
  });

  const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  };
});
