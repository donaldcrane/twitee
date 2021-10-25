import config from '../../config';

module.exports = {
  development: {
    url: config.DEV_DATABASE_URL,
    dialect: "postgres",
  },
  test: {
    url: config.TEST_DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    url: config.PROD_DATABASE_URL,
    dialect: "postgres",
  },
};
