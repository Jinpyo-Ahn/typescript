// interface Todo {
//     id: string;
//     title: string;
// }
//
// type OptionalTodo = Partial<Todo>;
//
// const nothing: OptionalTodo = {};
// const onlyId: OptionalTodo = {id: '아이디만'};
// const onlyTitle: OptionalTodo = {title: '제목만'};
// const todo: OptionalTodo = {id: '1', title: 'Partial 배우기'};

// interface Todo {
//     id: string;
//     title: string;
//     checked: boolean;
// }
//
// function updateTodo(todo: Todo) {
//     // ...
// }
//
// function updateTodo(todo: Pick<Todo, 'id'>) {
//
// }
//
// function updateTodo(todo: Omit<Todo, 'checked'>) {
//
// }
//
// function updateTodo(todo: Todo) {
//
// }
//
// function updateTodo(todo: Partial<Todo>) {
//     // ...
// }
//
// updateTodo({id: '1'});
// updateTodo({id: '1', title: 'Partial 학습'});
// updateTodo({id: '1', title: 'Partial 학습', checked: true});
