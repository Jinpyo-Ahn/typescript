// type User = {
//   id: string,
//   name: string
// }
//
// interface User1 {
//   id: string,
//   name: string
// }

// interface Person {
//   name: string,
//   age: number
// }
//
// type Adult = {
//   old: boolean,
// }
//
// type Teacher = Person & Adult;

// type MyString = string;
// type StringOrNumber = string | number;

// /**
//  * @typedef {Object} User
//  * @property {string} id
//  * @property {string} name
//  */
//
// /**
//  * @returns {User}
//  */
//
// function fetchDate() {
//   return axios.get
// }

// type User = {
//   id: string,
//   name: string
// }
//
// function fetchData(): User {
//   return axios.get('http://localhost:8080')
// }

interface Admin {
  role: string,
  department: string
}

interface User extends Admin {
  id: string,
  name: string
}

interface User {
  skill: string
}

