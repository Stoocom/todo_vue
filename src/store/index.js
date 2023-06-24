import { createStore } from 'vuex';

const STORAGE_KEY = 'todo-storage';

export default createStore({
    state: {
        todoList: localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : [],
    },
    getters: {
        getAlls(state) {
            return state.todoList;
        }
    },
    actions: {
        addTodo({commit}, todo) {
            commit("add_todo", todo);
        },
        deleteTodo({ commit }, id) {
            commit("delete_todo", id);
        },
        updateTodo({ commit }, todo) {
            commit("update_todo", todo);
        },
    },
    mutations: {
        add_todo(state, todo) {
            state.todoList.push(todo);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todoList));
        },
        delete_todo(state, id) {
            state.todoList = state.todoList.filter((todo) => todo.id != id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todoList));
        },
        update_todo(state, todo) {
            let index = state.todoList.findIndex((t) => t.id == todo.id);
            if (index != -1) {
              state.todoList[index] = todo;
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todoList))
        }
    },
})