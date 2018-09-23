const querystring = require('querystring')

const obj = querystring.parse('q=shell+ls+regex&rlz=1C5CHFA_enNL772ED772&oq=shell+ls+by+reg&aqs=chrome.1.63i27j0a4.4221e0b9&sourceid=chrome&ie=UTF-8')

console.log(JSON.stringify(obj, null, 2))
