const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

//relations
/*
User has many posts
User has many comments
Post belongs to user
Post hasmany comments
Comment belongs to post
Comment belongs to user
*/

User.hasMany(Post,{
    foreignKey: "creator_id",
});

User.hasMany(Comment,{
    foreignKey: "creator_id"
});
Post.hasMany(Comment,{
    foreignKey: "post_id",
});
Post.belongsTo(User,{
    foreignKey: "creator_id",
});
Comment.belongsTo(Post,{
    foreignKey: "post_id"
});
Comment.belongsTo(User,{
    foreignKey: "creator_id",
});



module.exports = { User, Post, Comment};
