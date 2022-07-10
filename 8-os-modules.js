const os = require('os')

const user = os.userInfo()
console.log(user);

console.log(`The system uptime is ${os.uptime()} in seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    freemem:os.freemem(),
    totalmem:os.totalmem(),
}
console.log(currentOS);