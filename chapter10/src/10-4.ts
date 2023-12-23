// interface ProductDropdown {
//   value: string,
//   selected: string
// }
//
// interface StockDropdown {
//   value: number,
//   selected: boolean
// }
//
// interface AddressDropdown {
//   value: {
//     city: string, zipCode: string
//   },
//   selected: boolean
// }

interface Dropdown<T> {
  value: T,
  selected: boolean
}

// let product: ProductDropdown;
// let stock: StockDropdown;
// let address: AddressDropdown;

let product: Dropdown<string>;
let stock: Dropdown<number>;
let Address: Dropdown<{ city: number, zipCode: string }>;