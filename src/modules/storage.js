function Storage() {
  function saveTodo(taskObj) {
    localStorage.setItem(taskObj.id, JSON.stringify(taskObj));
  }

  function loadTodo(id) {
    const todoObj = localStorage.getItem(taskObj.id);
    console.log(todoObj);
    return todoObj ? JSON.parse(todoObj) : [];
  }

  return { saveTodo, loadTodo };
}

export { Storage };
