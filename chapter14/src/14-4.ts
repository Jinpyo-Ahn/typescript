// // function isPerson(someone: Person | Developer): someone is Person {
// //
// // }
//
// // interface Person {
// //     name: string,
// //     age: number
// // }
// //
// // interface Developer {
// //     name: string,
// //     skill: string
// // }
// //
// // function isPerson(someone: Person | Developer): someone is Person {
// //     return (someone as Person).age !== undefined;
// // }
// //
// // function greet(someone: Person | Developer) {
// //     if (isPerson(someone)) {
// //         console.log('사람의 나이는 ', someone.age);
// //     } else {
// //         console.log('개발자의 스킬은 ', someone.skill);
// //     }
// // }
//
// interface Hero {
//     name: string,
//     nickname: string
// }
//
// interface Person {
//     name: string,
//     age: number
// }
//
// interface Developer {
//     name: string,
//     age: string,
//     skill: string
// }
//
// function isPerson(someone: Hero | Person | Developer): someone is Person {
//     return typeof (someone as Person).age === 'number';
// }
//
// function greet(someone: Hero | Person | Developer) {
//     if (isPerson(someone)) {
//         console.log(someone.age);
//     }
// }
//
