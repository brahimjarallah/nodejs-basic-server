const EventEmitter = require("events")
const uuid = require("uuid")

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg: msg })
  }
}
module.exports = Logger
// const person = {
//   name: "John Doe",
//   age: 32,
// }

// module.exports = person
// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   greeting() {
//     console.log(`my name is ${this.name} and my age is ${this.age}`)
//   }
// }

// module.exports = Person
