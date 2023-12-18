// function Person(name, skill) {
//     this.name = name;
//     this.skill = skill;
// }
//
// Person.prototype.sayHi = function () {
//     console.log('hi');
// }
//
// const joo = new Person('형주', '인프랩 운영');
//
// console.log(joo.name);
// console.log(joo.skill);
// joo.sayHi();

class Person {
    constructor(name, skill) {
        this.name = name;
        this.skill = skill;
    }

    sayHi() {
        console.log("hi");
    }
}

const joo = new Person("형주", "인프랩 운영");

