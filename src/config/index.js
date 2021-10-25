const { isEmpty } = require("lodash");
const logger = require("pino");
const dotenv = require("dotenv");

dotenv.config();
const config = {
  logger: logger(),
  PORT: process.env.PORT,
  DEV_DATABASE_URL: process.env.DEV_DATABASE_URL,
  JWT_KEY: process.env.JWT_KEY,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SENDGRID_Email: process.env.SENDGRID_EMAIL,
  APP_NAME: process.env.APP_NAME,
  COOKIE_KEY: process.env.COOKIE_KEY,
};

const absentConfig = Object.entries(config)
  .map(([key, value]) => [key, !!value])
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (!isEmpty(absentConfig)) {
  throw new Error(`Missing Config: ${absentConfig.join(", ")}`);
}

module.exports = config;
