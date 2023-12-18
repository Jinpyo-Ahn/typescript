// class Person {
//   name: string;
//   skill: string;
//
//   constructor(name: string, skill: string) {
//     this.name = name;
//     this.skill = skill;
//   }
// }
//
// const capt = new Person('캡틴', '방패 던지기');
// console.log(capt.name);
// capt.name = '헐크';
// console.log(capt.name);

// class WaterPurifier {
//   waterAmount: number;
//
//   constructor(waterAmount: number) {
//     this.waterAmount = waterAmount;
//   }
//
//   wash() {
//     if (this.waterAmount > 0) {
//       console.log('정수기 동작 성공');
//     }
//   }
// }
//
// const purifier = new WaterPurifier(30);
// purifier.wash();
// purifier.waterAmount = 0;
// purifier.wash();

// class WaterPurifier {
//   public waterAmount: number;
//
//   constructor(waterAmount: number) {
//     this.waterAmount = waterAmount;
//   }
//
//   public wash() {
//     if (this.waterAmount > 0) {
//       console.log('정수기 동작 성공');
//     }
//   }
// }
//
// const purifier = new WaterPurifier(50);
// console.log(purifier.waterAmount);
// purifier.wash();

// class Person {
//   private name: string;
//   private skill: string;
//
//   constructor(name: string, skill: string) {
//     this.name = name;
//     this.skill = skill;
//   }
//
//   private sayHi() {
//     console.log('hi');
//   }
// }
//
// const hulk = new Person('헐크', '소리치기');
// console.log(hulk.name);

// class Person {
//   private name: string;
//   private skill: string;
//
//   constructor(name: string, skill: string) {
//     this.name = name;
//     this.skill = skill;
//   }
//
//   protected sayHi(): void {
//     console.log('hi');
//   }
// }
//
// class Developer extends Person {
//   constructor(name: string, skill: string) {
//     super(name, skill);
//     this.sayHi();
//   }
//
//   coding(): void {
//     console.log('fun doing' + this.skill + ' by ' + this.name);
//   }
// }
//
// const capt = new Person('캡틴', '타입스크립트');
// capt.sayHi();
//
// const hulk = new Developer('헐크', '자바스크립트');
// hulk.

// class WaterPurifier {
//   private waterAmount: number;
//
//   constructor(waterAmount: number) {
//     this.waterAmount = waterAmount;
//   }
//
//   public wash() {
//     if(this.waterAmount > 0) {
//       console.log('정수기 정상 동작');
//     }
//   }
// }
//
// const purifier = new WaterPurifier(30);
// purifier.wash();
// purifier.waterAmount = 0;
// purifier.wash();

class WaterPurifier {
  #waterAmount: number;

  constructor(waterAmount: number) {
    this.#waterAmount = waterAmount;
  }

  public wash() {
    if(this.#waterAmount > 0) {
      console.log('정수기 정상 동작');
    }
  }
}

const purifier = new WaterPurifier(30);
purifier.wash();
// purifier.#waterAmount = 0;
purifier.wash();
