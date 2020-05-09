const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  'mongodb://localhost/tee-time',
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const userSeed = [
  {
    email: 'eric@test.gmail.com',
    password: 'password',
    username: 'erictest',
    matchHistory: [
      1, 2, 3, 4,
    ]
  },
  {
    email: 'Austen@test.gmail.com',
    password: 'password',
    username: 'austentest',
    matchHistory: [
      1, 2, 3, 4,
    ]
  },
  {

    email: 'Dustin@test.gmail.com',
    password: 'password',
    username: 'dustintest',
    matchHistory: [
      1, 2, 3, 4,
    ]
  },
  {
    email: 'Jon@test.gmail.com',
    password: 'password',
    username: 'jontest',
    matchHistory: [
      1, 2, 3, 4,
    ]
  }
]

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const matchSeed = [
  {
    participants: [
      'eric@test.gmail.com', 'Austen@test.gmail.com', 'Dustin@test.gmail.com', 'Jon@test.gmail.com'
    ],
    course: "Interbay Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    participants: [
      'eric@test.gmail.com', 'Austen@test.gmail.com', 'Dustin@test.gmail.com'
    ],
    course: "Jackson Park Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    participants: [
      'eric@test.gmail.com', 'Jon@test.gmail.com'
    ],
    course: "Jefferson Park Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    participants: [
      'Austen@test.gmail.com'
    ],
    course: "West Seattle Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  }
]

db.Match.deleteMany({})
  .then(() => db.Match.collection.insertMany(matchSeed))
  .then(data => {
    console.log(data.result.n + " Match records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });




const roundSeed = [
  {
    golfer: 'eric@test.gmail.com',
    matchId: 1,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Austen@test.gmail.com',
    matchId: 1,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Dustin@test.gmail.com',
    matchId: 1,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Jon@test.gmail.com',
    matchId: 1,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  }, {
    golfer: 'eric@test.gmail.com',
    matchId: 2,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Austen@test.gmail.com',
    matchId: 2,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Dustin@test.gmail.com',
    matchId: 2,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  }, , {
    golfer: 'eric@test.gmail.com',
    matchId: 3,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  }, {
    golfer: 'Jon@test.gmail.com',
    matchId: 3,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Austen@test.gmail.com',
    matchId: 4,
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  }
]

db.Round.deleteMany({})
  .then(() => db.Round.collection.insertMany(roundSeed))
  .then(data => {
    console.log(data.result.n + " Round records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });