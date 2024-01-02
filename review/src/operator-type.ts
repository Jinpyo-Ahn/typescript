// function logText(text: string | number) {
//   console.log(text);
// }
//
// logText('100');

// interface Person {
//   name: string,
//   age: number
// }
//
// interface Developer {
//   name: string,
//   skill: string
// }
//
// function introduce(someone: Person | Developer) {
//   if ('age' in someone) {
//     console.log(someone.age);
//     return;
//   }
//   if ('skill' in someone) {
//     console.log(someone.skill);
//     return;
//   }
// }

// introduce({name: '캡틴', skill: '인프런 강의'});


// function logText(text: string | number) {
//   if (typeof text === 'string') {
//     console.log(text.toUpperCase());
//   }
//   if (typeof text === 'number') {
//     console.log(text.toLocaleString());
//   }
// }

interface Avenger {
  name: string;
}

interface Hero {
  skill: string;
}

function introduce(someone: Avenger & Hero) {
  console.log(someone.name)
  console.log(someone.skill)
}

introduce({name: '캡틴', skill: '어셈블'});


