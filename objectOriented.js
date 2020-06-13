// factory model

function createPerson(name, age, job) {
  const o = new Object()
  o.name = name;
  o.age = age
  o.job = job
  return o
}

// customize constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  sayName: function() {
    console.log(this.name)
  },
  work: function() {
    console.log(this.capacity + 'ing')
  }
}

function Doctor() {

}
Doctor.prototype = new Person('xx', '2')
Doctor.prototype.capacity = 'heal'
const hh = new Doctor()
hh.work(), hh.sayName()

// Programmer.prototype = new Person() 参数不好传递，且容易覆盖prototype的方法
// 所以采用以下借用构造函数 优势传递参数，劣势是prototype无法被继承

function Programmer(name, age) {
  Person.call(this, name, age)
}

// Programmer.prototype.capacity = 'program'

const a = new Programmer('jamin', 24)

// 所以采用组合继承 不足是调用了两次超类的构造函数
function SuperMan(name, age) {
  Person.call(this, name, age)
}

// 继承方法
SuperMan.prototype = new Person()
SuperMan.prototype.constructor = SuperMan;
SuperMan.prototype.capacity = 'everything'

const didi = new SuperMan('jamin', 123)
didi.sayName();
didi.work();

// The instanceof operator tests the presence of constructor.prototype in object's prototype chain.
console.log( didi instanceof Person)

// Object.create prototype inherit
Object.create = (obj, opt) => {
  function F() {}
  if (opt) Object.defineProperty(obj,opt)
  F.prototype = obj;
  return new F()
}

// 寄生组合继承
function inheritPrototype(subType, superType) {
  const prototype = Object.create(superType.prototype);
  prototype.constructor = subType
  subType.prototype = prototype
}

function Tramp(name, age) {
  Person.call(this, name, age)
}

inheritPrototype(Tramp, Person)
Tramp.prototype.capacity = 'eat, sleep, have a lot of fun '

const tramp = new Tramp('ourselves', 'xx')
tramp.work()
tramp.sayName()
