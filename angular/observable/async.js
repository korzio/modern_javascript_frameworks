fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height)
              .write(dest + 'w' + width + '_' + filename, function(err) {
                if (err) console.log('Error writing file: ' + err)
              })
          }.bind(this))
        }
      })
    })
  }
}) // "pyramids of death"


function myFunction(inputValue) {
  asyncFunc1('value', (err, a) => {
      if (err) {
          // handle error
      } else {
          asyncFunc2('value', (err, b) => {
              if (err) {
                  // handle error
              } else {
                  try {
                      const c = syncFunc3(b)
                      asyncFunc4('value', (err, d) => {
                          if (err) {
                              // handle error
                          } else {
                              callback(null, d)
                          }
                      })
                  } catch (ex) {
                      // handle error
                  }
              }
          })
      }
  })
}

async function myFunction(inputValue) {
  try {
      const a = await asyncFunc1('value');
      const b = await asyncFunc2(a);
      const c = syncFunc3(b);
      return await asyncFunc4(c);
  } catch (ex) {
      // handle exception
  }
}

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen(); // "Generator { }"