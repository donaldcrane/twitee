const { UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comments",{  
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      unique: true,
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  Comment.associate = models => {
    Comment.belongsTo(models.Posts, {
        as: "post_comments",
        foreignKey: "postId",
    });
    Comment.belongsTo(models.Users, {
        as: "user_comments",
        foreignKey: "userId",
      });
  };
    
  return Comment;
};
