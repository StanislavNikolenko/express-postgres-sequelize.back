import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
require('dotenv').config();

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  ssl: false,
  clientMinMessages: 'notice',
});

export const connect = async () => {
  try {
    // Use synchronization for non production database only.
    // if (process.env.DB_NAME?.endsWith('skeleton')) {
    //   await sequelize.sync({ force: true });
    // }
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
