const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'dab',
    password: 'password',
    port: 5432
});

module.exports = async function getClient() {
    await client.connect();
    return client;
}