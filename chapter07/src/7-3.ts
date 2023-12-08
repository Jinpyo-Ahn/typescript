// type MyString = string;
// type StringOrNumber = string | number;
// type Admin = Person & Developer;

// // 제네릭
// type Dropdown<T> = {
//   id: string,
//   title: T;
// }
//
// // 유틸리티 타입
// type Admin = {
//   name: string,
//   age: number,
//   role: string
// }
// type OnlyName = Pick<Admin, 'name'>;
//
// // 맵드 타입
// type Picker<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// /**
//  * @typedef {Object} User
//  * @property {string} id
//  * @property {string} name
//  */
//
// /**
//  * @return {User}
//  */
//
// function fetchData() {
//   return axios.get('http://localhost:3000/users/1');
// }

// // 1. 타입 별칭으로 API 함수의 응답 형태를 정의
// type User = {
//   id: string,
//   name: string
// }
//
// function fetchData():User {
//   return axios.get('http://localhost:3000/users/1');
// }
//
// // 2. 인터페이스로 API 함수의 응답 형태를 정의
// interface User {
//   id: string,
//   name: string
// }
//
// function fetchData():User {
//   return axios.get('http://localhost:3000/users/1');
// }

// interface Admin {
//   role: string,
//   department: string
// }
//
// // 상속을 통한 인터페이스 확장
// interface User extends Admin {
//   id: string,
//   name: string
// }
//
// // 선언 병합을 통한 타입 확장
// interface User {
//   skill: string
// }

interface User {
  id: string,
  name: string,
  role: string,
  department: string,
  skill: string
}