const BaseService = require("./base-service");
const IngridientModel = require("../models/ingridient");

class IngridientService extends BaseService {
  constructor() {
    super(IngridientModel, `${__dirname}/../ingridient-database.json`);
  }
}

module.exports = new IngridientService();
