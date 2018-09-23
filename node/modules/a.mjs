import * as b from './b.mjs'
console.log(b.b)
export const a = 'a'
var c = 'c' // not available globally, modules are namespaced by default 
console.log('finished')