const providerTable = require('../routes/provider/providerTable');

providerTable
    .sync()
    .then(() => console.log('Provider table created with success'))
    .catch(error => console.error(error))
