function di(config) {
  return function(target) {
    Object.assign(target.prototype, config.inject)
    return target
  }
}

@di({
  inject: {
    logger: console
  }
})
class A {
  logger: any
}

new A().logger.log(123)