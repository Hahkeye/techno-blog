const { Comment } = require('../models');

const commentData = [
  {
    post_id: 1,
    body: 'This is a even cooler body of this part',
    creator_id: 1
  },
  {
    post_id: 3,
    body: 'The best part of nifty posts are the content',
    creator_id: 2
  },
  {
    post_id: 1,
    body: 'So I am now just typing whatever I feel like typing.',
    creator_id: 3
  },
  {
    post_id: 2,
    body: 'Why this fox did what he did im not sure but he probably has really good reason.',
    creator_id: 2
  },
  {
    post_id: 2,
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    creator_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
