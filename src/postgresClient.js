const { Client } = require('pg');
const { pgUser,
        pgHost,
        pgDatabase,
        pgPassword,
        pgPort
     } = require('./config');

const client = new Client({
    user: pgUser,
    host: pgHost,
    database: pgDatabase,
    password: pgPassword,
    port: pgPort
});

module.exports = async function getClient() {
    await client.connect();
    return client;
}