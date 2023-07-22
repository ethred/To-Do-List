import './style.css';

import Functio from './modules/input.js';
import Checked from './modules/checked.js';

const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');
const removeBtnEl=document.getElementById('remove');
const todo = new Functio();
const checkTodo = (todoId) => {
  let { todos } = this;
  // eslint-disable-next-line no-unused-vars
  todos = todos.map((todo, index) => ({
    ...todo,
    completed: index === todoId ? !todo.completed : todo.completed,
  }));
  // console.log(todos);
  todo.renderTodos(todosListEl);
};
todosListEl.addEventListener('click', (event) => {
  const { target } = event;
  const parentEl = target.parentNode;

  if (parentEl.className !== 'todo') return;
  const todo = parentEl;
  const todoId = Number(todo.id);
  const { action } = target.dataset;
  const change = new Functio();
  const toBeChecked = new Checked();
  if(action === 'check') {
    toBeChecked.checkTodo(todoId);
    change.renderTodos(todosListEl);
  } else if (action === 'edit') {
    change.editTodo(todoId, todosListEl);
    change.renderTodos(todosListEl);
  } else if (action === 'delete') {
    change.deleteTodo(todoId);
    change.renderTodos(todosListEl);
  }
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  todo.saveTodo(todoInput);
  todo.renderTodos(todosListEl);
});
todo.renderTodos(todosListEl);
const input = document.getElementsByClassName('data');
todosListEl.addEventListener('keydown', (event) => {
  const TobeUpdate = new Functio();
  const { target } = event;
  const parentEl = target.parentNode;
  if (parentEl.className !== 'todo') return;
  const todo = parentEl;
  const todoId = Number(todo.id);
  const EvenValue = event.key;
  const { value } = input[todoId];

  if (EvenValue === 'Enter') {
    TobeUpdate.update(todoId, value);
    TobeUpdate.renderTodos(todosListEl);
  }
});

removeBtnEl.addEventListener('click', (Event) => {
  Event.preventDefault();
   const toBeDelete = new Checked();
   toBeDelete.toDelete();
});
