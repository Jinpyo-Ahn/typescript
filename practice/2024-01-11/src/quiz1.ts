// function getId(id: string) {
//   return id;
// }
//
// let myId = getId('josdf') as unknown as number; // 타입스크립의 결함 ->

// let variable: unknown;
// let booleanType: boolean = variable;
//
// let bool: boolean = true;
// let unkw: unknown = bool;
//
// let anyValue: any;
// let boolT  = anyValue;

const anyType: any = true;
const hi: string = anyType;
console.log(hi.toUpperCase());