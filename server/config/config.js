const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
      .allow(['development', 'production', 'test'])
      .default('development'),
    SERVER_PORT: Joi.number()
      .default(7777)
  }).unknown()
  .required();

const {
  error,
  value: envVars
} = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT
};

module.exports = config;
