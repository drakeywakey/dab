module.exports = async function getBrands(client) {
    return await client.query('SELECT * FROM brands');
};