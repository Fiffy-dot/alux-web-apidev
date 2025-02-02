import Sequelize from "sequelize";
import dbConfig from "./config.js";

console.log(dbConfig.PASSWORD);

export const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

sequelize.authenticate()
    .then(() => {
        console.log(">>> Connection Successful");
    })
    .catch(err => {
        console.log(">>> Connection Failed:", err);
    });