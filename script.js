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


//Lesson 3