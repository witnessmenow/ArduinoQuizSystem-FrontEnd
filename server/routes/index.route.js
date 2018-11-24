const express = require('express');
const cors = require('cors');
const router = express.Router();

router.use(cors());

router.get('/health', (req, res) => {
  res.send('OK');
});


module.exports = router;
