const db = require('../models');

const router = require('express').Router();

// remember that we add '/api' within the server so we can leave it off here

// get all the users
router.get(
    '/users',
    (req, res) => {
        db.User.find({})
            .then(
                data => {
                    res.json(data)
                }
            ).catch(
                ({ message }) => {
                    console.log(message);
                }
            )
    }
)

router.get(
    '/matches',
    (req, res) => {
        db.Match.find({})
            .then(
                data => {
                    res.json(data)
                }
            ).catch(
                ({ message }) => {
                    console.log(message);
                }
            )
    }
)

router.get(
    '/rounds',
    (req, res) => {
        db.Round.find({})
            .then(
                data => {
                    res.json(data)
                }
            ).catch(
                ({ message }) => {
                    console.log(message);
                }
            )
    }
)  



module.exports = router;