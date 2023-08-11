const { DataTypes } = require("sequelize");

function classModel({ sequelize }) {
  return sequelize.define("classe", {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  });
}

module.exports = { classModel };
