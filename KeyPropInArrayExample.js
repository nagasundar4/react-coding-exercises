const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

const todoItems = todos.map((todo, index) => (
  <li key={index}>{todo.text}</li>
));
