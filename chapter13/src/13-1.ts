// let myName = '세호';

// let myName = '세호' as string;

// interface Person {
//   name: string,
//   age: number
// }
//
// const joo = {} as Person;
// joo.name = '형주';
// joo.age = 31;

// function getId(id) {
//   return id;
// }
//
// let myId = getId('josh') as number;

// let num = (10 as any) as number;

// let num as number = 10;

// let num = 10 as string;

// function shuffleBooks(books) {
//   const result = books.shuffle();
//   return result;
// }
//
// shuffleBooks();

interface Books {
  shuffle: Function;
}

function shuffleBooks(books: Books | null) {
  const result = books!.shuffle();
  return result;
}