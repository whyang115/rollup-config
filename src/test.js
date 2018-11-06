function enumerable(value) {
  return function (target, key, descriptor) {
    descriptor.enumerable = value
    return descriptor
  }
}

export default class Test {
  arrowMethod = () => {
    console.log(1)
  }
  @enumerable(false)
  method() { }
}

