const express = require('express');

const logger = require('../libs/logger');
const mainController = require('../controllers/main');

const router = express.Router();

router.get('/', async (req, res) => {
  const { id } = req.query;
  const result = await mainController.getDataById(id);
  res.json(result);
});

module.exports = router;