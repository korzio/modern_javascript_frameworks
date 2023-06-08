const timeout = (index) => console.log(`timeout ${index}`)
const immediate = (index) => console.log(`immediate ${index}`)

const Num = 2e3

for (let i = 0; i < Num; i++) {
  setTimeout(() => timeout(i))
}

for (let i = 0; i < Num; i++) {
  setImmediate(() => immediate(i))
}
