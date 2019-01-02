module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define("Place", {
    pid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false
    },
    numberOfRatings: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    searchedBefore: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Place;
};
