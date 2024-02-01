// interface Ironman {
//     name: string
// }
//
// class Avengers {
//     name: string;
// }
//
// let i: Ironman;
// i = new Avengers();

// type Captain = {
//     name: string
// }
//
// interface Antman {
//     nickname: string;
// }
//
// let a: Captain = {
//     name: '캡틴',
// };
//
// let b: Antman = {
//     nickname: '앤트맨',
// };
//
// b = a;

type Person = {
    name: string;
}

interface Developer {
    name: string;
    skill?: string;
}

let joo: Person = {
    name: '형주',
}

let capt: Developer = {
    name: '캡틴',
    skill: '방패 던지기',
}

joo = capt;
capt = joo;