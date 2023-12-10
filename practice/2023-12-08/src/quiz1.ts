/*
{ "id":1,
  "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price":109.95,
  "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category":"men's clothing",
  "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating":{"rate":3.9,"count":120}
  }
 */

/*
  id: 별도의 타입으로 그 이유는 id의 타입이 항상 숫자는 아니다.
  price:
  타입 시스템을 이해해야 한다.
  부동 소수점 오류를 포함하지 않는 데이터 타입
  데이터를 교환하지 않아 rating 데이터 타입을 지정할 때 type 키워드를 사용한다.
  데이터 타입은 특성 속성의 범주를 잘 표현할 수 있는 애로
  위에다 선언을 하고
 */

const a = 10;
const b: number = 10.2;
const c: Integer = 10;
type Integer = number;

type Id = string | number;
type Money = number;
type Url = string;
type RealNumber = number;

interface product  { // 확장 가능하게 인터페이스로 지정하는 게 좋을 듯
  id: Id,
  title: string,
  price: Money,
  description: string,
  category: string,
  image: Url,
  rating: RealNumber
}

const fetchTodo: () => Promise<product> = async (): Promise<product> => {
  const response = await fetch('https://fakestoreapi.com/products/1');
  return await response.json();
};

fetchTodo().then(todo => console.log(todo));