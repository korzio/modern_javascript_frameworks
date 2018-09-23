function f() {
  // throw '123'
  throw new Error('123')
}
function g() {
  f()
}
function a() {
  g()
}

a()