import {Client} from 'pg';

export async function up(connect: Client) {
    const res = await connect.query(`
        CREATE TABLE users (
            id      SERIAL      PRIMARY KEY,
            shared  BOOLEAN     DEFAULT false,
            email   varchar(40)
        );
    `);

    console.info(res)
}