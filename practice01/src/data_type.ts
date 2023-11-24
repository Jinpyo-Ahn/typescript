/**
 * 'https://jsonplaceholder.typicode.com/todos/1'
 * 위 주소를 호출하여 주소에 해당하는 데이터를 반환하는 함수를 만드시오.
 * 단, 반환 값의 데이터 타입을 지정해야 한다.
 */

const fetchTodo = async (): Promise<{ userId: number, id: number, title: string, completed: boolean }> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todo = await response.json();
  return todo;
};

fetchTodo().then(todo => console.log(todo));