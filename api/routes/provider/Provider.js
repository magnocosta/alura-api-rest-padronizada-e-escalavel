const Model = require('./Model');

class Provider {

    constructor({ id, company, email, category, createdAt, updatedAt, version}) {
        this.id = id;
        this.company = company;
        this.email = email;
        this.category = category;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.version = version;
    }

    async create() {
        const result = await Model.create({
            company: this.company,
            email: this.email,
            category: this.category
        });
        this.createdAt = result.createdAt;
        this.id = result.id;
    }

    async findById() {
        const result = await Model.findById(this.id);
        this.company = result.company;
        this.email = result.email;
        this.category = result.category;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }

    async update() {
        await Model.findById(this.id);
        const fields = ['company', 'email', 'category'];
        const dataToUpdate = {};

        for(const field of fields) {
            const value = this[field];

            if (typeof value === 'string' && value.length > 0) {
                dataToUpdate[field] = value;
            }
        }

        if (dataToUpdate.length === 0) {
            throw new Error('There is no data to update');
        }

        await Model.update(this.id, dataToUpdate);
    }

}

module.exports = Provider;
