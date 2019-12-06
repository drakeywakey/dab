const db = require('../db');

module.exports = class BrandService {
    async getBrands() {
        return await db.query('SELECT * FROM brands');
    }
}