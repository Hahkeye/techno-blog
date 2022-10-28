const { Post } = require('../models');

const postData = [
    {
        title: 'This is a cool post',
        body: 'This is a even cooler body of this part',
        creator_id: 1
      },
      {
        title: 'Post are nifty ',
        body: 'The best part of nifty posts are the content',
        creator_id: 2
      },
      {
        title: 'I no longer know what to type',
        body: 'So I am now just typing whatever I feel like typing.',
        creator_id: 3
      },
      {
        title: 'The brown fox jumped over the lazy brown river.',
        body: 'Why this fox did what he did im not sure but he probably has really good reason.',
        creator_id: 2
      },
      {
        title: 'lorem ipsum ',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        creator_id: 3
      }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
