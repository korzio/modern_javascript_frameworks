require('fs')
  .readdir('not exist', (err) => {
    throw err
    throw new Error('test', err)
  })