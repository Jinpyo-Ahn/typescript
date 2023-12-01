/**
 * 'https://jsonplaceholder.typicode.com/todos/1'
 * 위 주소를 호출하여 주소에 해당하는 데이터를 반환하는 함수를 만드시오.
 * 단, 반환 값의 데이터 타입을 지정해야 한다.
 * 힌트: 인터페이스와 타입을 용도에 맞게 사용하시오.
 */

type user = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: address
  phone: string,
  website: string,
  company: company
}

interface address {
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  }
}

interface company {
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

const fetchTodo: () => Promise<user> = async (): Promise<user> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return await response.json();
};

fetchTodo().then(todo => console.log(todo));