module.exports = async function getDivisions(client) {
    return await client.query('SELECT * FROM divisions');
}