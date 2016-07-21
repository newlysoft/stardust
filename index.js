class Person {
  constructor() {
    this.name = ''
    this.sayHi = () => console.log('hi')
  }
  die() {
    console.log(this.name + ' has died')
  }
}

class Levi extends Person {
  constructor() {
    super()
    // this.name = name
    console.log('foo')
  }
}

var levi = new Levi()
