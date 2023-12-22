/**
 * "Hello my name is .... 2023"을 입력 받아 slug 형식으로 출력하는 프로그램을 작성하세요.
 * slug 형식은 공백을 하이픈(-)으로 바꾸고 모든 문자를 소문자로 바꾸는 것을 말합니다.
 */

// function getSlug(str:string):string {
//   str
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/[\s_-]+/g, '-')
//     .replace(/^-+|-+$/g, '');
//   return str;
// }

// console.log(getSlug("Hello my name is jinpyo 2023"));

// const slugify = (str: string) =>
//   str
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/[\s_-]+/g, '-')
//     .replace(/^-+|-+$/g, '');
//
// console.log("Hello my name is jinpyo 2023");

// 근원
// function Slug(input: string): string {
//   const slug = input.toLowerCase().replace(' ', '-');
//   return slug;
// }
//
// const a = "Hello my name is ParkGeunWon 2023";
// const b = Slug(a);
// console.log(b);

// 동민
const log = console.log;

function stringToSlug(message: string): string {
  return message.split(" ").join("-").toLowerCase();
  // const words: string = input.replace( /\s/g,"-");
  // const words: string = input.replace(" ","-");
}

const result: string = stringToSlug("Hello my name is Dongmin 2023");
log(result); // or slug

// 제공하는 기본 메서드를 알아야 한다. -> 정규표현식보다 기본에...
/**
 * 내장 메서드를 사용해야 한다. -> 언어의 중요성
 * 네이밍( 메서드명, 매개변수 명) -> 명확하게 + 네이밍 규칙(컨밴션)
 * 어떻게 설계를 할건지가 (접근하는 )
 */