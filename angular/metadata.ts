import "reflect-metadata"

function logParameters(target: any, key: string) {
  var types = Reflect.getMetadata("design:paramtypes", target, key)
  var s = types.map(a => a.name).join()
  console.log(`${key} param types: ${s}`)
}

class Foo { }
interface IFoo { }

class Demo {
  @logParameters // apply parameter decorator
  doSomething(
    param1: string, param2: number, param3: Foo, 
    param4: { test: string }, param5: IFoo,
    param6: Function, param7: (a: number) => void,
  ): number {
    return 1
  }
}