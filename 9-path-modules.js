const path = require('path')

console.log(path.sep);
const join = path.join('subfolder','test.txt')
console.log(join);

const absolute = path.resolve(__dirname,'subfolder','test.txt')
console.log(absolute);

const basename = path.basename(join)

console.log(basename);

