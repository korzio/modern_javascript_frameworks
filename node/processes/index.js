const { spawn } = require('child_process')
const ls = spawn('ls', ['-la'], {
  stdio: 'inherit',
})
