function my(target, key, descriptor) {
  console.log('my decorator called')
 }

 class A {
  @my
  method() {
    return 1
  }
 }

 new A().method()