const router = require('express').Router();
const { sayHi, serveTemplate } = require('./controllers');

router.get('/', sayHi);
router.get('/template', serveTemplate);

module.exports = router;
