module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: { type: DataTypes.STRING },
    },
    {
      tableName: "Users",
    }
  );

  return User;
};
