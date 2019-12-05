module.exports = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }

    async brandsGet(req, res) {
        const { rows } = await this.brandService.getBrands();
        res.send(rows);
    }
}