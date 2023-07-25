import { createSlice} from "@reduxjs/toolkit";

const setTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const toolkitSlice = createSlice({
    name: "MainSlice",
    initialState: {
        todos: [],
        popupMode: {
            state: false,
            value: ''
        }
    },
    reducers: {
        getTodosFromLocalStorage(state, action) {
            if (JSON.parse(localStorage.getItem("todos"))) {
                state.todos = JSON.parse(localStorage.getItem("todos"));
            }
            
        },
        addTodo(state, action) {
            let todoId = 0;

            const todo =  state.todos.find(todo => todo.text === action.payload);
            if (todo) {
                return;
            }

            if (state.todos.length) {
                todoId = state.todos[state.todos.length - 1].id + 1;
            }
            const newTodo = {
                id: todoId,
                text: action.payload,
                isCompleted: false
            }
            state.todos.push(newTodo);
            setTodos(state.todos);
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            setTodos(state.todos);
        },
        toggleCompletedToto(state, action) {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })
            setTodos(state.todos);
        },
        editTodo(state, action) {
            state.todos = state.todos.map((todo) => {
                if (todo.text === state.popupMode.value) {
                    todo.text = action.payload;
                }
                return todo;
            });
            state.popupMode.state = false;
            setTodos(state.todos);
        },
        changePopupMode(state, action) {
            state.popupMode.state = !state.popupMode.state;
            state.popupMode.value = action.payload;
        }, 
    }
});

export default toolkitSlice.reducer;

export const {addTodo, deleteTodo, toggleCompletedToto, changePopupMode, editTodo, getTodosFromLocalStorage} = toolkitSlice.actions;