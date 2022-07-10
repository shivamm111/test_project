const _ = require('loadsh')
const item = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(item)
const items1 = [1,[[2],[3,4]],[5]]
const ite = _.flattenDeep(items1,2)
console.log(items1);

console.log(newItems);