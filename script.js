//Lesson 3

var toDoList = {todos: ['item 1', 'item 2','item 3'],
displayToDos: function() { console.log('My Todos', this.todos);
},


    Addtodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
        },
        changeTodo: function(position, newValue) {
            this.todos[position] = newValue;
            this.displayTodos();
            },
        deleteTodo: function(position) {
            this.todos.splice(position, 1);
            this.displayTodos();
            }
};



//Lesson 7
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll(); });