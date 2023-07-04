const router = require('express').Router();
const { sayHi } = require('./controllers');

router.get('/', sayHi);

module.exports = router;
