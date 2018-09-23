function my(config) {
  console.log('my decorator called')
  return function(target) {
    return target
  }
}

@my({
  meta: 'me'
})
class A {
  method() {
    return 1
  }
}

new A().method()