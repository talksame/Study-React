const fs = require('fs');

const article = fs.readFileSync(`./input.txt`);
lineArray = article.toString().split('\n');