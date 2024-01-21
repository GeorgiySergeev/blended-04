import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, { payload }) => {
            state.todos = [...state.todos, payload]
        },
        deleteTodo: (state, { payload }) => {
           state.todos = state.todos.filter(todo => todo.id !== payload)
        }
    },
    selectors: {
        getTodos: (state) => state.todos,
    }
});

export default todoSlice.reducer;

export const { addTodo , deleteTodo} = todoSlice.actions;
export const { getTodos } = todoSlice.selectors;