const _ = require('loadsh')
const item = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(item)
const items1 = [1,[2],[3,4],[5]]
console.log(items1,2);

console.log(newItems);