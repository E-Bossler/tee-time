const db = require("../models");
const router = require("express").Router();

// remember that we add '/api' within the server so we can leave it off here

// get all the users
router.get("/api/users", (req, res) => {
  db.User.find({})
    .then(data => {
      res.json(data);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.post("/api/users", (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});

router.put("/api/users", (req, res) => {
  db.User.find({
    username: req.body.username,
  })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.log(error);
    });
});

//Route for getting friends with friend Ids
router.put("/api/dashboard/matchView/friends", (req, res) => {
  db.User.find({ username: req.body.username })
    .then(data => {
      res.json(data[0].friends);
    })
    .catch(err => {
      console.log(err);
    });
});

// Finds Matches when user goes to Matches (fetches all matches in DB right now)
// router.get("/api/dashboard/userMenu/matches", (req, res) => {
//   db.Match.find({})
//     .then(data => {
//       res.json(data);
//     })
//     .catch(({ message }) => {
//       console.log(message);
//     });
// });

router.put("/api/dashboard/userMenu/friends", (req, res) => {
  db.User.find({
    username: req.body.username,
  })
    .then(data => {
      res.json(data);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.put("/api/dashboard/userMenu/friendRequests", (req, res) => {
  db.User.find({
    username: req.body.username,
  })
    .then(data => {
      res.json(data);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.post("/api/dashboard/userMenu/friends", (req, res) => {
  db.User.find({
    username: req.body.friend,
  }).then(data => {
    if (data[0] === undefined) {
      res.json("Friend not Found.");
    } else if (req.body.friend === req.body.user) {
      res.json("Cannot add yourself.");
    } else {
      db.User.find({ username: req.body.user })
        .then(userData => {
          console.log(userData[0]);
          for (let i = 0; i < userData[0].friends.length; i++) {
            if (userData[0].friends[i].username === req.body.friend) {
              return res.json("Already friended.");
            }
          }
          for (let i = 0; i < data[0].friendRequests.length; i++) {
            if (data[0].friendRequests[i].username === req.body.user) {
              return res.json("Already sent request.");
            }
          }
          db.User.findOneAndUpdate(
            { username: req.body.friend },
            {
              $push: {
                friendRequests: {
                  friendId: userData[0]._id,
                  username: userData[0].username,
                  currentMatchId: req.body.userData.currentMatchId,
                },
              },
            }
          ).then(data => {
            res.status(201).json(data);
          });
        })
        .catch(({ message }) => {
          console.log(message);
        });
    }
  });
});

router.post("/api/dashboard/userMenu/friendRequests", (req, res) => {
  console.log(req.body.request);
  db.User.find({ username: req.body.username }).then(userData => {
    console.log(userData);
    console.log(req.body.userData);
    db.User.findOneAndUpdate(
      {
        _id: req.body.request.friendId,
      },
      {
        $push: {
          friends: {
            friendId: userData[0]._id,
            username: userData[0].username,
            currentMatchId: req.body.userData.currentMatchId,
          },
        },
      }
    )
      .then(data => {
        res.json(data);
      })
      .catch(({ message }) => {
        console.log(message);
      });
    db.User.findOneAndUpdate(
      {
        username: req.body.username,
      },
      {
        $push: {
          friends: {
            friendId: req.body.request.friendId,
            username: req.body.request.username,
            currentMatchId: req.body.request.currentMatchId,
          },
        },
        $pull: { friendRequests: req.body.request },
      }
    )
      .then(data => {
        res.json(data);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });
});

router.get("/api/rounds", (req, res) => {
  db.Round.find({})
    .then(data => {
      res.json(data);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

// SIGN UP SET UP

router.post("/api/account/signup", (req, res) => {
  const { body } = req;
  let { email, password, username, matchHistory } = body;

  if (!email) {
    return res.send({
      success: false,
      message: "Input an email",
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: "Input a password",
    });
  }

  email = email.toLowerCase();

  // Verify email doesn't exist
  db.User.find(
    {
      email: email,
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: `Please see error message: ${err}`,
        });
      }
      if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: "WARNING WARNING! Account already exists! WARNING WARNING!",
        });
      }
      return;
    }
  );

  // save the email

  const newUser = new db.User();

  newUser.email = email;
  newUser.username = username;
  newUser.password = newUser.generateHash(password);
  newUser.save((err, user) => {
    if (err) {
      return res.send({
        success: false,
        message: `Please see error message: ${err}
        location 0`,
      });
    }
    return res.send({
      success: true,
      message: "SUCCESS! YOU HAVE SIGNED UP! PLEASE LOGIN!",
    });
  });
});

// SIGN IN SET UP

router.post("/api/account/signin", (req, res, next) => {
  const { body } = req;
  let { email, password } = body;

  if (!email) {
    return res.send({
      success: false,
      message: "Input an email",
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: "Input a password",
    });
  }

  email = email.toLowerCase();

  db.User.find(
    {
      email: email,
    },
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: `Please see error message: ${err}
        location 1`,
        });
      }
      if (users.length != 1) {
        return res.send({
          succcess: false,
          message: "WHAT HAVE YOU DONE!? THAT'S NOT RIGHT!",
        });
      }

      const user = users[0];

      if (!user.validPassword(password)) {
        return res.send({
          succcess: false,
          message: "That password is wrong... who are you?!",
        });
      }

      const userSession = new db.UserSession();

      userSession.userId = user._id;

      userSession.save((err, doc) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: `Please see error message: ${err}
          location 2`,
          });
        }
        return res.send({
          success: true,
          message: "SUCCESS! YOU HAVE SIGNED IN! IT IS TEE TIME!!! FOOOOURRRRR",
          token: doc._id,
        });
      });
    }
  );
});

// VERIFY SET UP

router.get("/api/account/verify", (req, res) => {
  db.UserSession.find({})
    .then(data => {
      res.json(data);
    })
    .catch(({ message }) => {
      console.log("Message:", message);
    });
});

// LOG OUT SET UP

router.get("/api/account/logout", (req, res, next) => {
  //get the token
  // const query = req;
  console.log(req.body);
  const token = req.body._id;
  const updateLogOut = {
    isDeleted: true,
  };
  console.log(`Token: ${token}`);
  //verify the token is one of a kind and is not deleted

  db.UserSession.findOneAndUpdate(
    {
      _id: token,
      isDeleted: false,
    },
    updateLogOut,
    null,
    err => {
      if (err) {
        return res.send({
          success: false,
          message: `Please see error message: ${err}
      location 3`,
        });
      }
      return res.send({
        success: true,
        message: "We have logged you out",
      });
    }
  );
});

// SET UP A  NEW MATCH

router.post("/dashboard/api/match/new", (req, res, next) => {
  db.Match.collection
    .insertOne({
      course: req.body.course,
      participants: req.body.allPlayers,
    })
    .then(data => {
      req.body.allPlayers.map((player, i) => {
        const match = player.currentMatchId;
        // console.log("Current Match ID", match);
        // db.User.updateMany(
        //   { username: { $in: player.username } },
        //   {
        //     $push: {
        //       matchHistory: player.currentMatchId,
        //     },
        //     $set: {
        //       currentMatch: {
        //         courseId: data.ops[0]._id,
        //         courseName: data.ops[0].course,
        //         players: data.ops[0].participants,
        //       },
        //     },
        //   }
        // ).then(data => {
        //   res.json(data);
        // });
      });
      // const lastMatch = req.body.allPlayers[0].currentMatch;

      // console.log("Players: ", players);
      // console.log("Req Body", req.body);
      // console.log(".then Data", data.ops);
    })
    .catch(err => {
      console.log(err);
    });
});

// CREATE A NEW NEW ROUND

router.post("/api/round/new", (req, res, next) => {
  //STILL NEED TO SET UP THIS ROUTE
});

// ADD MATCH TO HISTORY

router.post("/api/match/history", (req, res, next) => {
  //STILL NEED TO SET UP THIS ROUTE
});

// GET MATCH HISTORY

router.get("/api/match/history", (req, res, next) => {
  //STILL NEED TO SET UP THIS ROUTE
});

router.post("/api/user/score", (req, res) => {
  console.log(req.body);
  db.User.findOneAndUpdate(
    { _id: req.body.userData.id },
    {
      currentMatch: {
        $push: {
          holes: {
            name: req.body.currentHole,
            score: req.body.currentScore,
          },
        },
      },
    }
  );
});

//GET CURRENT MATCH
router.put("/api/match/current", (req, res) => {
  console.log(req.body); // matchId object
  db.Match.find({ _id: req.body.matchId }).then(data => {
    res.json(data);
  });
});

//SAVES MESSAGES TO CHAT LOG IN MATCH
router.post("/api/match/current/saveChatMessage", (req, res) => {
  const matchId = req.body.userData.currentMatchId;
  db.Match.findOneAndUpdate(
    { _id: matchId },
    {
      $push: {
        chat: {
          message: req.body.chatMessage,
          messager: req.body.userData.username,
          messagerId: req.body.userData.id,
        },
      },
    }
  ).then(data => {
    console.log(data);
    res.json(data);
  });
});

//Get Chat Message Log
router.put("/api/match/current/getChat", (req, res) => {
  console.log(req.body);
  const currentMatch = req.body.userData.currentMatchId;

  db.Match.find({ _id: currentMatch }).then(data => {
    res.json(data);
  });
});

module.exports = router;
