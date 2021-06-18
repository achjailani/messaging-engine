const { Sequelize } = require("sequelize");
const config = require("../config/database");

const connectTo =
  process.env.NODE_ENV == "production" ? config.production : config.development;

const dbConnect = new Sequelize({
  ...connectTo,
  pool: {
    max: 10,
    idle: 5000,
  },
});

module.exports = {
  dbConnect,
  Sequelize,
};
