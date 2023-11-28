// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   logAge() {
//     console.log(this.age);
//   }
// }
//
// class Developer extends Person{
//   constructor(name, age, skill) {
//     super(name, age);
//     this.skill = skill;
//   }
//
//   logDeveloperInfo() {
//     this.logAge();
//     console.log(this.name);
//     console.log(this.skill);
//   }
// }

// interface Person {
//   name: string,
//   age: number
// }
//
// interface Developer extends Person {
//   skill: string
// }
//
// const ironman: Developer = {
//   name: '아이언맨',
//   age: 21,
//   skill: '만들기',
// }

// interface Person {
//   name: string,
//   age: number
// }
//
// interface Developer extends Person {
//   name: number,
// }

interface Hero {
  power: boolean;
}

interface Person extends Hero {
  name: string,
  age: number
}

interface Developer extends Person {
  skill: string
}

const ironman: Developer = {
  name: '아이언맨',
  age: 21,
  skill: '만들기',
  power: true,
}

