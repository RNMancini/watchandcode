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

//Lesson 5
'item 1'
'item 2'
'item 3'
for(var i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
    
}

var toDoList = {todos: [],
displayToDos: function() 
{ if (this.todos.length === 0)
{
    console.log('Your todo list is empty!'); } 
    else { console.log('My todos:');
for (var i = 0; i < this.todos.length; i++) {
console.log('(x)', this.todos[i].todoText); 
    
} else {console.log('( )', this.todos[i].todoText); }
}
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
