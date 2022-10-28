const { User } = require('../models');

const userData = [
  {
    username: 'ussername1',
    password: 'totallyhashedpassword1',
  },
  {
    username: 'ussername2',
    password: 'totallyhashedpassword2',
  },
  {
    username: 'ussername3',
    password: 'totallyhashedpassword3',
  },
  {
    username: 'ussername4',
    password: 'totallyhashedpassword4',
  },
  {
    username: 'ussername5',
    password: 'totallyhashedpassword5',
  },
  {
    username: 'ussername6',
    password: 'totallyhashedpassword6',
  }
];

const seedUsers = () => User.bulkCreate(userData,{individualHooks: true});

module.exports = seedUsers;
