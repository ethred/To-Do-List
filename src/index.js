import './style.css';

const form = document.getElementById('todoform');
const todosListEl = document.getElementById('todos-list');
const todos = [{
  index: 0,
  description: 'Project submition',
  completed: false,
},
{
  index: 1,
  description: 'Reading the referance',
  completed: false,
}];
form.addEventListener('submit', (event) => {
  event.preventDefault();
});

const renderTodos = () => {
  todos.forEach((todo, index) => {
    todosListEl.innerHTML += `
            <div class="todo" id="${index}">
                <i class="bi ${todo.completed ? 'bi-check-square-fill' : 'bi-app'}"></i>
                <p class="">${todo.description}</p>
                <i class="bi bi-three-dots-vertical"></i>
            </div>`;
  });
};
renderTodos();