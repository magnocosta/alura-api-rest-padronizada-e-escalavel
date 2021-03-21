const Model = require('./providerTable');

module.exports = {
    list() {
        return Model.findAll();
    },
    async create(provider) {
        return Model.create(provider);
    },
    async findById(id) {
        const result = await Model.findOne({
            where: { id: id }
        });

        if (!result) {
            throw new Error('Provider not found')
        }

        return result;
    },
    async update(id, data) {
        return await Model.update(data, {
            where: { id: id }
        });
    }
}
