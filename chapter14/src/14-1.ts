// function updateInput(textInput: number | string | boolean) {
//   (textInput as number).toFixed(2);
//   console.log((textInput as string).length);
// }
//
// updateInput('hello');

// function updateInput(textInput: number | string | boolean) {
//   if (typeof textInput === 'number') {
//     textInput.toFixed(2);
//     return;
//   }
//   if (typeof textInput === 'string') {
//     console.log(textInput.length);
//     return;
//   }
// }

// typeof 10;
// typeof 'hello';
// typeof function () {}

// function printText(text: string | number) {
//   if(typeof text === 'string') {
//     console.log(text.trim());
//   }
//   if(typeof text === 'number') {
//   }
// }

// function Person(name: string, age: number) {
//   this.name = name;
//   this.age = age;
// }
//
// const captain = new Person('캡틴', 100);
//
// captain instanceof Person;

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function fetchInfoByProfile(profile: Person | string) {
  // ...
}