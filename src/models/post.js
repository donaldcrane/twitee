const { UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Posts",{  
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      unique: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  Post.associate = models => {
    Post.hasMany(models.Comments, {
      as: "comments",
      foreignKey: "postId",
      onDelete: "cascade",
      hooks: true,
    });
    Post.belongsTo(models.Users, {
      as: "posts",
      foreignKey: "userId",
    });
  };
  return Post;
};
