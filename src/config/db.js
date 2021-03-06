const { Sequelize } = require('sequelize');

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT || 3306;

const sequelize = new Sequelize(`mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`);

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection to the DB ${dbName} has been established successfully`);
  } catch (error) {
    console.error(`Unable to connect to the DB ${dbName}: `, error);
  }
};

dbConnect();

module.exports = sequelize;
