const db = require('../db');

module.exports = class DivisionService {
    async getDivisions() {
        return await db.query('SELECT * FROM divisions');
    }
}