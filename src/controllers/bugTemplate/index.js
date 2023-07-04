const path = require('path');

const compiledFunction = path.join(__dirname, 'template.pug');

exports.serveTemplate = (req, res) => {
  res.render(compiledFunction, {title: 'App Title with Lina'});
};
