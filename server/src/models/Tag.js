module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define("Tag", {
    pid: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Tag.associate = function(models) {
    Tag.belongsTo(models.Place, {
      foreignKey: "pid"
    });
  };

  return Tag;
};
