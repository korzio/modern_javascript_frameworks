function main() {
  first()
}

function first() {
  second()
}

function second() {
  throw new Error('stack attached')
}

main()