// interface Todo {
//   id: string;
//   title: string;
// }
//
// type MyPartial = {
//   [Property in keyof Todo]?: Todo[Property];
// };

// interface Person {
//   name: string;
//   age: number;
// }
//
// type PersonPartial = {
//   [Property in keyof Person]?: Person[Property];
// };
//
// type Hero = {
//   name: string;
//   skill: string;
// }
//
// type HeroPartial = {
//   [Property in keyof Hero]?: Hero[Property];
// };

// type MyPartial<Type> = {
//   [Property in keyof Type]?: Type[Property];
// };

// interface Todo {
//   id: string;
//   title: string;
// }
//
// type OptionalTodo = Partial<Todo>;