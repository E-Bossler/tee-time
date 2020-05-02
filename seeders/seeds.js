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
    userName: 'Eric-test-user',
    firstName: 'Eric',
    email: 'eric@test.gmail.com',
    password: 'password',
    matchHistory: [
      1, 2, 3, 4,
    ]
  },
  {
    userName: 'Austen-test-user',
    firstName: 'Austen',
    email: 'Austen@test.gmail.com',
    password: 'password',
    matchHistory: [
      1, 2, 3, 4,
    ]
  },
  {
    userName: 'Dustin-test-user',
    firstName: 'Dustin',
    email: 'Dustin@test.gmail.com',
    password: 'password',
    matchHistory: [
      1, 2, 3, 4,
    ]
  },
  {
    userName: 'Jon-test-user',
    firstName: 'Jon',
    email: 'Jon@test.gmail.com',
    password: 'password',
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
      'Eric-test-user', 'Austen-test-user', 'Dustin-test-user', 'Jon-test-user'
    ],
    course: "Interbay Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },
  {
    participants: [
      'Eric-test-user', 'Austen-test-user', 'Dustin-test-user'
    ],
    course: "Jackson Park Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },
  {
    participants: [
      'Eric-test-user', 'Jon-test-user'
    ],
    course: "Jefferson Park Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },
  {
    participants: [
      'Austen-test-user'
    ],
    course: "West Seattle Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  }
]

db.Match.deleteMany({})
  .then(() => db.Match.collection.insertMany(roundSeed))
  .then(data => {
    console.log(data.result.n + " Match records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

   
  

  'Eric-test-user'
  'Jon-test-user'
  'Austen-test-user'

const roundSeed = [
  {
    golfer: 'Eric-test-user',
    matchId: 1,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },
  {
    golfer:  'Austen-test-user',
    matchId: 1,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },
  {
    golfer:  'Dustin-test-user',
    matchId: 1,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },
  {
    golfer:  'Jon-test-user',
    matchId: 1,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },  {
    golfer: 'Eric-test-user',
    matchId: 2,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },
  {
    golfer:  'Austen-test-user',
    matchId: 2,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },
  {
    golfer:  'Dustin-test-user',
    matchId: 2,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },,  {
    golfer: 'Eric-test-user',
    matchId: 3,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },{
    golfer:  'Jon-test-user',
    matchId: 3,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
    ]
  },
  {
    golfer:  'Austen-test-user',
    matchId: 4,
    score: [
      3,4,3,4,5,3,4,5,4,3,4,3,4,5,3,4,5,4
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