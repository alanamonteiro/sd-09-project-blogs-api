const Category = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: true,
  });

  return category;
};

module.exports = Category;
