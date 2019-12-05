module.exports = function makeBrandsDb(db) {
    return {
        findAll
    }

    async function findAll() {
        const { rows } = await db.query('SELECT * FROM brands')
        return rows
    }
}