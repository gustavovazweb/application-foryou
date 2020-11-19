//KNEX AND PATH IMPORTING
import knex from 'knex';
import path from 'path';

//CONNECTION CONSTANT
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

//CONNECTION EXPORTING
export default db;