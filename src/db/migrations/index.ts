import {up as createUsersTable} from './create_users_table'
import {dbClient} from "../index";

async function main() {
    await dbClient.connect();
    await createUsersTable(dbClient);
    dbClient.end();
}


main().then(() => console.log('migrated'));