import './style.css';

import functio from './modules/input.js';
const form=document.getElementById('todoform')
const todoInput=document.getElementById('newtodo')
const todosListEl=document.getElementById('todos-list')
const todo=new functio();
todosListEl.addEventListener('click', (event) => {
    const target=event.target;
    const parentEl=target.parentNode;

    if(parentEl.className !== 'todo') return ;
    const todo=parentEl;
    const todoId=Number(todo.id)
    const action=target.dataset.action;
    const change= new functio()
    
    action === 'check' && checkTodo(todoId);
    if(action === 'edit'){
      change.editTodo(todoId,todosListEl);
      change.renderTodos(todosListEl);
    }else if(action === 'delete'){
      change.deleteTodo(todoId);
      change.renderTodos(todosListEl);
    }
});
const checkTodo=(todoId)=>{
  let todos=this.todos
    todos=todos.map((todo,index)=>({
        ...todo,
        completed:index === todoId ? !todo.completed : todo.completed,
    }));
    todo.renderTodos(todosListEl);
}
form.addEventListener('submit',function(event){
  event.preventDefault();
  todo.saveTodo(todoInput)
  todo.renderTodos(todosListEl);
})
  todo.renderTodos(todosListEl);
  const input=document.getElementsByClassName('data');
 todosListEl.addEventListener('keydown', (event) => {
   const TobeUpdate=new functio()
    const target=event.target;
    const parentEl=target.parentNode;
    if(parentEl.className !== 'todo') return ;
    const todo=parentEl;
    const todoId=Number(todo.id)
    const action=target.dataset.action;
    const EvenValue=event.key;
   let value=input[todoId].value ;
   
   if (EvenValue==='Enter'){
    TobeUpdate.update(todoId,value,);
    TobeUpdate.renderTodos(todosListEl)
   }
});
todo.renderTodos(todosListEl);
