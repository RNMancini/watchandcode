//Lesson 4
var toDoList = {todos: [],
displayToDos: function() { console.log('My Todos', this.todos);
},


    Addtodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
            });
        this.displayTodos();
        },
        changeTodo: function(position, newValue) {
            this.todos[position] = newValue;
            this.displayTodos();
            },
        deleteTodo: function(position) {
            this.todos.splice(position, 1);
            this.displayTodos();
            },
            toggleCompleted: function(position) {
            var todo = this.todos(position)
            todo.completed = !todo.completed;
            this.displayTodos();
            }
};
'item 1'
