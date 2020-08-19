const fetch = require('node-fetch');
const db = require('../libs/db');

const getDataById = async (id) => {
  const dummyData = await db.getDataFromTable(id)
  return dummyData;
}

module.exports = {
  getDataById,
};