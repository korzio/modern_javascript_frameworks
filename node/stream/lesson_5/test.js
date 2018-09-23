// process.stdin.on( 'data', (chunk) => {    process.stdout(chunk)})



const stdIn = process.stdin;
const stdOut = process.stdout;
console.log('please enter your name >');
stdIn.resume();
stdIn.on('data', function (data) {
  stdOut.write(`so your name is ${data}`);
});



// console.log(typeof process.stdout)