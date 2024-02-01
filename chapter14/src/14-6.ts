// interface Person {
//     name: string,
//     age: number,
//     industry: 'common'
// }
//
// interface Developer {
//     name: string,
//     age: string,
//     industry: 'tech'
// }
//
// function greet(someone: Person | Developer) {
//     switch (someone.industry) {
//         case "nothing":
//             console.log(someone.age.toFixed(2));
//             break;
//         case "financial":
//             console.log(someone.age.split(''));
//             break;
//     }
// }

function sayHi(message: string | null) {
    if (message && message.length >= 3) {
        console.log(message);
    }
}