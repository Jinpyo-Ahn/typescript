// function getText<T>(text: T): T {
//   return text;
// }
//
// getText<string>('hi');

// interface ProductDropdown {
//   value: string,
//   selected: boolean
// }
//
// interface StockDropdown {
//   value: number,
//   selected: boolean
// }
//
// interface AddressDropdown {
//   value: { city: string, zipCode: string },
//   selected: boolean,
// }

// interface Dropdown<T> {
//   vale: T,
//   selected: boolean;
// }
//
// let product: Dropdown<string>;
// let stock: Dropdown<number>;
// let address: Dropdown<{ city: string, zipCode: string }>;

// function embraceEverything<T extends string>(thing: T): T {
//   return thing;
// }

// function lengthOnly<T extends { length: number }>(value: T): number {
//   return value.length
// }
//
// lengthOnly('hi');
// lengthOnly([1, 2, 3]);
// lengthOnly({title: 'abc', length: 123});

// function printKeys<T extends keyof { name: string, skill: string }>(value: T) {
//   console.log(value);
// }
//
// printKeys('name');
// printKeys('skill');

function printTextLength<T extends { length: number }>(text: T) {
  console.log(text.length);
}








