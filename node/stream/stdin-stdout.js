// process.stdin.setEncoding('utf8')

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read()
//   if (chunk !== null) {
//     process.stdout.write(`${chunk}`)
//     if (chunk.toString().includes('done')) {
//       process.exit(1);
//     }
//   }
// })

// process.stdin.on('end', () => {
//   process.stdout.write('end')
// })

process.stdin.pipe(process.stdout)