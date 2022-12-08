const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("candy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { notEmpty: true },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/bulk-candy-assortment-1000-pc-~5_1651",
  },
});
