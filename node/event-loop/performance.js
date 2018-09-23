const { performance } = require('perf_hooks')

// setTimeout(() => {
  process.on('exit', () => {
    console.log(performance.nodeTiming)
  })
// }, 1000)