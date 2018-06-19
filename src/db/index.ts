import {Client} from "pg";

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

export const dbClient: Client = new Client({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
});