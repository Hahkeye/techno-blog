const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connect');

class Post extends Model {}

Post.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    body:{
        type: DataTypes.STRING(500),
        allowNull: false
    },
    creator_id:{
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id"
        }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
