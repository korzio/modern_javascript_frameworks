#!/usr/bin/env node

process.stdin.setEncoding('utf8')
process.stdin.on('data', (chunk) => {
    console.log(chunk.toString)
    console.log(chunk)
})