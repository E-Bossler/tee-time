const db = require("../models");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const mongoose = require("mongoose");

// remember that we add '/api' within the server so we can leave it off here

// get all the users
router.get("/users", (req, res) => {
  db.User.find({})
    .then(data => {
      res.json(data);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.post("/users", (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.name,
    },
  })
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});

// Finds Matches when user goes to Matches (fetches all matches in DB right now)
router.get("/dashboard/userMenu/matches", (req, res) => {
  console.log(req);
  db.Match.find({})
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.put("/dashboard/userMenu/friends", (req, res) => {
  console.log(req.body);
  db.User.find({
    username: req.body.user,
  })
    .then(data => {
      res.json(data);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.post("/dashboard/userMenu/friends", (req, res) => {
  console.log(req.body);
  db.User.find({
    username: req.body.friend,
  })
    .then(data => {
      console.log(data[0]);
      if (data[0] === undefined) {
        res.json("Friend not Found.");
      } else {
        res.json("Friend added!");
        db.User.findOneAndUpdate(
          { username: req.body.friend },
          { $push: { friendRequests: req.body.user } }
        ).then(data => {
          res.json(data);
        });
      }
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.get("/rounds", (req, res) => {
  db.Round.find({})
    .then(data => {
      res.json(data);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

// SIGN UP SET UP

router.post("/account/signup", (req, res) => {
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
      // if (err) {
      //   return res.send({
      //     success: false,
      //     message: `Please see error message: ${err}`,
      //   });
      // }
      if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: "WARNING WARNING! Account already exists! WARNING WARNING!",
        });
      }
      return 
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

router.post("/account/signin", (req, res, next) => {
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
      message: "Input a passwords",
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
        console.log("location 10");
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

router.get("/account/verify", (req, res) => {
  //get the token
  // console.log("This should be the params", req);
  let token;
  // console.log('This should be the token', token)
  // console.log("here is your token", token)
  // console.log('Here is the token we are locating:', token)
  //verify the token is one of a kind and is not deleted

  db.UserSession.find({
    // _id: token
  })
    .then(data => {
      console.log("We are getting here");
      res.json(data);
    })
    .catch(({ message }) => {
      console.log("Message:", message);
    });

  // db.UserSession.findById({
  //   _id: token
  // }, (err, results) => {
  //   if (err) {
  //     return res.send({
  //       success: false,
  //       message: `Please see error message: ${err}
  //       location 3`
  //     })
  //   }
  //   console.log('The session:',
  //   results,
  //   '----------------------------------------------------')
  //   return res.send({
  //     success: true,
  //     message: 'Session Exists.'
  //   })
  //   if (results.length != 1) {
  //     return res.send({
  //       success: false,
  //       message: "Something went wrong... "
  //     })
  //   } else {
  //     return res.send({
  //       success: true,
  //       message: 'Good session.'
  //     })
  //   }

  // })
});

// LOG OUT SET UP

router.get("/account/logout", (req, res, next) => {
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
    (err, sessions) => {
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

router.post("/match/new", (req, res, next) => {
  //STILL NEED TO SET UP THIS ROUTE
});

// CREATE A NEW NEW ROUND

router.post("/round/new", (req, res, next) => {
  //STILL NEED TO SET UP THIS ROUTE
});

// ADD MATCH TO HISTORY

router.post("/match/history", (req, res, next) => {
  //STILL NEED TO SET UP THIS ROUTE
});

// GET MATCH HISTORY

router.get("/match/history", (req, res, next) => {
  //STILL NEED TO SET UP THIS ROUTE
});

module.exports = router;
