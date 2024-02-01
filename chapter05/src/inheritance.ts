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

// interface Hero {
//   power: boolean;
// }
//
// interface Person extends Hero {
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
//   power: true,
// }

// interface Person {
//   name: string,
//   age: number
// }

// interface Developer extends Person {
//   name: "developer",
// }

// const developer: Developer = {
//   name: "developer",
//   age: 12
// }

interface Person {
  name: string,
  age: number
}

type Person2 = {
  name: string;
  age: number
}

// interface Avenger {
//   name: string
// }
//
// interface Hero {
//   skill: string
// }
//
// function introduce(someone: Avenger & Hero) {
//   console.log(someone.name);
//   console.log(someone.skill);
// }





