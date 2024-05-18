require("dotenv").config();
const { Chapa } = require("chapa-nodejs");
const chapa = new Chapa({
  secretKey: process.env.CHAPA_SECRET_KEY,
});
async function abebe() {
  const response = await chapa.getBanks();
  console.log(response);
}
abebe();
