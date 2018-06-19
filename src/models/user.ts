import {dbClient} from "../db";

const table = `users`;

export async function create(email: string, shared: boolean): Promise<user> {
    const query = {
        name: 'create-user',
        text: `INSERT INTO ${table} (email, shared) VALUES ($1, $2) RETURNING id;`,
        values: [email, shared]
    };

    try {
        let resp = await dbClient.query(query);
        return {
            id: resp.rows[0].id,
            shared: shared,
            email: email,
        };
    } catch (err) {
        console.error(err.stack)
    }
}


export async function update(id: number, email: string, shared: boolean): Promise<boolean> {
    try {
        const query = {
            name: 'update-user',
            text: `UPDATE ${table} SET "id" = $1, "shared" = $2, "email" = $3 WHERE "id" = $1`,
            values: [id, shared, email]
        };
        await dbClient.query(query);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export type user = {
    id: number;
    shared: boolean;
    email: string;
}