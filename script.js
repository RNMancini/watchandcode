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
    todoList.toggleAll(); 
    
});

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    AddTodo: function() {

    }
};

//lesson 8
var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    
    AddTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
   todoList.addTodo(addTodoTextInput.value);
   addTodosTextInput.value =" ";
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput') = document.getElementById()
    var changeTodoTextInput + document.getElementById('changeTodoTextInput');
    todoList.changeTodo('changeTodoPositionInput.valueAsNumber, changeTodoTextInput');
    changeTodoPositionInput.value = ' ';
    changeTodoTextInput.value = '';
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput')
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
        
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput')
    }todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        
},
toggleAll: function() {
        todoList.toggleAll();
    }
};