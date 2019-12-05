module.exports = function makeListBrands (brandsDb) {
    return async function listBrands() {
        return await brandsDb.findAll()
    }
}