//Lesson 3

var toDoList = {
    todos: [],

    addTodo: function(todoText) {
        this.todos.push({
            todoText,
            completed: false 
        });
        },
        changeTodo: function(position, todoText) {
            this.todos[position].todoText = todoText;
            },
        deleteTodo: function(position) {
            this.todos.splice(position, 1);
            },
            toggleCompleted: function(position) {
                var todo = this.todo[position];
                todo.completed = !toto.completed;
            },
            toggleAll: function() {
                var totalTodos = this.todos.length;
                var completedTodos = 0;
            }
};



//chnge in previous lesson
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
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
   todoList.addTodo(addTodoTextInput.value);
   addTodosTextInput.value =" ";
   view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo('changeTodoPositionInput.valueAsNumber, changeTodoTextInput');
    changeTodoPositionInput.value = ' ';
    changeTodoTextInput.value = '';
    view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput')
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    } todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        
},
toggleAll: function() {
        todoList.toggleAll();
    }
};

var view = {
    displayTodos: function() {
        var todosUl = document.jquerySelector('ul');
        todosUl.innerHTML = '';
      for (var i = 0; i < todoList.todos.length; i++)  { var todosUl = document.jquerySelector('ul');
        var todoLi = document.createElement('li');
       var todo = todoList.todos[i];
       var todoTextWithCompletion = '(x)' = todo.todoText; }
       else { todoTextWithCompletion = '()' = todo.todoText; }
        todoLi.textContent = todoLists.todos[i].todoText;
todoUl.appendChild(todoLi);
    }
}
};