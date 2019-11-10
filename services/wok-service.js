const BaseService = require("./base-service");
const WokModel = require("../models/wok");

class WokService extends BaseService {
  constructor() {
    super(WokModel, `${__dirname}/../wok-database.json`);
  }
}

module.exports = new WokService();
