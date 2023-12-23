// function embraceEverything<T extends string>(thing: T): T {
//   return thing;
// }
//
// embraceEverything<string>('hi');
// embraceEverything<number>(100);
// embraceEverything<boolean>(false);
// embraceEverything<{ name: string }>({name: 'capt'});

// function lengthOnly<T extends { length: number }>(value: T): number {
//   return value.length;
// }
//
// lengthOnly('hi');
// lengthOnly([1, 2, 3]);
// lengthOnly({title: 'abc', length: 123});
//
// lengthOnly(123);

// type DeveloperKeys = keyof { name: string, skill: string };

function printKeys<T extends keyof { name: string, skill: string }>(value: T) {
  console.log(value);
}