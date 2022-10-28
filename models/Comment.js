const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connect');

class Comment extends Model {}

Comment.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    body:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    creator_id:{
        type: DataTypes.INTEGER,
        references:{
          model: 'user',
          key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
