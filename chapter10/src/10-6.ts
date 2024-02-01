// function printTextLength<T>(text: T) {
//   console.log(text.);
// }
//
// printTextLength('hello');

// function printTextLength<T extends { length: number }>(text: T) {
//   console.log(text.length);
// }

function printTextLength<T>(text: T[]) {
  console.log(text.length)
}

printTextLength<string>(['a', 'b', 'c']);
printTextLength<number>([1, 2, 3]);
printTextLength([true, false]);