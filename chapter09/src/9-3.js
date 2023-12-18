// class Person {
//     constructor(name, skill) {
//         this.name = name;
//         this.skill = skill;
//     }
//
//     sayHi() {
//         console.log("hi");
//     }
// }
//
// class Developer extends Person {
//     constructor(name, skill) {
//         super(name, skill);
//     }
//
//     coding() {
//         console.log("fun");
//     }
// }
//
// const capt = new Developer("캡틴", "방패 던지기");
// capt.coding();
// capt.sayHi();
//
// console.log(capt.name);
// console.log(capt.skill);

class Person {
    constructor(name, skill) {
        this.name = name;
        this.skill = skill;
    }

    sayHi() {
        console.log("hi");
    }
}

class Developer extends Person {
    constructor(name, skill) {
        super(name, skill);
        this.sayHi();
    }

    coding() {
        console.log("fun doing" + this.skill + " by " + this.name);
    }
}