import * as a from './a.mjs'

console.log(a)

import('./empty.js').then(({ a }) => {
  console.log(a)
})

export const b = 'b'