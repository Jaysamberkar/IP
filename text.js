function Person(name, age) {
  this.name = name;
  this.age = age;
}

const Person1 = new Person("jay", 20);

Person.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};

Person1.sayHello();
