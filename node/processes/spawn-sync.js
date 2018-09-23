const { spawnSync } = require('child_process')
const node = spawnSync('node', ['error.js'])
const nonode = spawnSync('node', ['no-error.js'])

console.log('error', node.status)
console.log('no-error', nonode.status)

