const Ingridient = require("./models/ingridient");
const Wok = require("./models/wok");
const IngridientService = require("./services/ingridient-service");
const WokService = require("./services/wok-service");

const Database = require("./database");

async function main() {
  const rice = new Ingridient("rice");
  const nodles = new Ingridient("nodles");
  const wok1 = new Wok();

  rice.addToWok(wok1);
  nodles.addToWok(wok1);

  //   await IngridientService.add(rice);
  //   await IngridientService.add(nodle);

  //   const people = await IngridientService.findAll();
  //   console.log(people);

  console.log(wok1.ingridients);
  wok1.cooking();
  wok1.cooking();

  Database.save("wok.json", wok1);
  Database.save("ingridient.json", rice);

  const loadedFile = Database.load("wok.json");
  // console.log(loadedFile.wok1)
}

main();
