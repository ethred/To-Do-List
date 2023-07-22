let todos = [];
if (localStorage.getItem('todolist') != null) {
  todos = JSON.parse(localStorage.getItem('todolist'));
}

const saveToLocalStorage = () => {
  localStorage.setItem('todolist', JSON.stringify(todos));
};
let EditTodoID = -1;
class functio {
    saveTodo=(todoInput) => {
      const todovalue = todoInput.value;
      const size = todos.length + 1;
      const isEmpty = todovalue === '';

      const isDuplicate = todos.some((todo) => todo.description === todovalue);
      if (isEmpty) {
        alert("Todo's input is empty");
      } else if (isDuplicate) {
        alert('To do is duplicated ');
      } else if (this.EditTodoID >= 0) {
        todos = todos.map((todo, index) => ({
          ...todo,
          description: index === EditTodoID ? todovalue : todo.description,
        }));
        EditTodoID = -1;
      } else {
        const todo = {
          index: size,
          description: todovalue,
          completed: false,
          edit: true,
        };
        todos.push(todo);
        saveToLocalStorage();
        todoInput.value = '';
      }
    }

    update(todoId, value) {
      todos = todos.map((todo, index) => ({
        ...todo,
        description: index === todoId ? value : todo.description,
        edit: index === todoId ? !todo.edit : todo.edit,
      }));
      saveToLocalStorage();
      window.location.reload();
      this.EditTodoID = todoId;
    }

    deleteTodo(todoId) {
      todos = todos.filter((todo, index) => index !== todoId);
      todos = todos.map((todo, index) => ({
        ...todo,
        index: index + 1,
      }));
      this.EditTodoID = -1;
      saveToLocalStorage();
    }

    renderTodos=(todosListEl) => {
      todosListEl.innerHTML = '';
      todos.forEach((todo, index) => {
        todosListEl.innerHTML += `
                  <div class="todo" id="${index}">
                      <i class="bi ${todo.completed ? 'bi-check-square-fill' : 'bi-app'}" data-action="check"></i>
                      <input id="data" class="data ${todo.edit ? 'read' : 'edit'}" value="${todo.description}" data-index="${index}">
                      <i class="bi ${todo.edit ? 'bi-three-dots-vertical' : 'bi-trash3'}" data-action="${todo.edit ? 'edit' : 'delete'}"></i>
                  </div>`;
      });
    }

      editTodo=(todoId) => {
        todos = todos.map((todo, index) => ({
          ...todo,
          edit: index === todoId ? !todo.edit : todo.edit,
        }));
      }
      todos = () =>{
        return todos;
      }

      setodos=(tods) => {
        todos = tods;
        saveToLocalStorage();
        console.log(todos);
      }
}
export default functio;
