const { readFile: readFileCallback, promises: { readFile } } = require('fs')

readFileCallback('callbacks', (err, res) => {
  if (err) {
    console.log('handle every error like this')
    return
  }

  console.log('should not be designed')
})

readFile('promises API is')
  .then(() => console.log('the way better'))
  .catch(() => console.log('also with catch'))

async function asyncReadFile() {
  try {
    await readFile('async / await')
    console.log('is awesome')
  } catch (err) {
    console.log('isn\'t it?')
  }
}

asyncReadFile()
