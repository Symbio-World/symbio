// import { Json, JsonCompatible } from './Json'

// function test<T extends JsonCompatible<T>>(json: T): T {
//   return null as any
// }

// interface A {
//   a: number
// }

// class B {
//   a!: number
// }

// interface C {
//   a?: number
// }

// interface X {
//   a: Date
// }

// interface Y {
//   a?: Date
// }

// interface Z {
//   a: number | undefined
// }

// const any = null as any

// // compiler OK
// test(null)
// test(false)
// test(0)
// test('')
// test([])
// test({})
// test([0])
// test({ a: 0 })
// test(any as A)
// test(any as B)
// test(any as C)

// // compiler throws
// test(new Date())
// test([new Date()])
// test({ a: new Date() })
// test(any as X)
// test(any as Y)
// test(any as Z)
// test({ a: undefined })
