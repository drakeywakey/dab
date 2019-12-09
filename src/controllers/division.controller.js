module.exports = class DivisionController {
    constructor(divisionService) {
        this.divisionService = divisionService;
    }

    async divisionsGet(req, res) {
        const { rows } = await this.divisionService.getDivisions();
        res.send(rows);
    }
}