const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./subfolder/first.txt','utf-8')
const second = readFileSync('./subfolder/second.txt','utf-8')


writeFileSync('./subfolder/result-sync.txt',`Here is the result : ${first} , ${second} `, {flag : 'a'})

console.log('done with the task');
console.log('starting with the next');