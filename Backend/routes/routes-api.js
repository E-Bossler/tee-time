const db = require("../models");
const bcrypt = require("bcrypt");
const router = require("express").Router();

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

router.get("/matches", (req, res) => {
  db.Match.find({})
    .then(data => {
      res.json(data);
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

router.post('/account/signup', (req, res, next) => {
  const { body } = req;
  let {
    email,
    password,
    matchHistory
  } = body;

  if (!email) {
    return res.send({
      success: false,
      message: "Input an email"
    })
  }

  if (!password) {
    return res.send({
      success: false,
      message: "Input a passwords"
    })
  }

  console.log("We are getting here");

  email = email.toLowerCase();

  // Verify email doesn't exist 

  db.User.find(
    {
      email: email
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: "WARNING WARNING! Server Error! WARNING WARNING!"
        })
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: "WARNING WARNING! Account already exists! WARNING WARNING!"
        })
      }
    }
  )

  // save the email 

  const newUser = new db.User();

  newUser.email = email

  newUser.password = newUser.generateHash(password);
  newUser.save((err, user) => {
    if (err) {
      return res.send({
        success: false,
        message: "WARNING WARNING! Server Error! WARNING WARNING!"
      })
    }
    return res.send({
      success: true,
      message: "SUCCESS! YOU HAVE SIGNED UP! PLEASE LOGIN!"
    })
  })
})
// SING IN SET UP

router.post('/account/signin', (req, res, next) => {
  const { body } = req;
  let {
    email,
    password
  } = body;

  if (!email) {
    return res.send({
      success: false,
      message: "Input an email"
    })
  }

  if (!password) {
    return res.send({
      success: false,
      message: "Input a passwords"
    })
  }

  email = email.toLowerCase();

  db.User.find({
    email: email
  }, (err, users) => {
    if (err) {
      return res.send({
        success: false,
        message: "ANOTHER SERVER ERROR! OH NOOOOO!!!"
      })
    }
    if (users.length != 1) {
      return res.send({
        succcess: false,
        message: "WHAT HAVE YOU DONE!? THAT'S NOT RIGHT!"
      })
    }

    const user = users[0];

    if (!user.validPassword(password)) {
      return res.send({
        succcess: false,
        message: "That password is wrong... who are you?!"
      })
    }

    const userSession = new db.UserSession();

    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if (err) {
        console.log(err)
        return res.send({
          success: false,
          message: "ANOTHER SERVER ERROR!"
        })
      }
      return res.send({
        success: true,
        message: "SUCCESS! YOU HAVE SIGNED IN! IT IS TEE TIME!!! FOOOOURRRRR",
        token: doc._id
      })


    })


  })
});



module.exports = router;
