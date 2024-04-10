const yaml = require('yaml');
const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, '/estructura.yml'), 'utf8');
const objeto = yaml.parse(file);
yaml.parse(objeto);
console.log(objeto);