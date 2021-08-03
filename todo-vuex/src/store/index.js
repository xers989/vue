import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'buy a bike', checked: true},
            { id: 3, text: 'buy a pencil', checked: false},
        ],
        users: []

    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
              });

        },
        TOGGLE_TODO(state, {id, checked}){
            const index = state.todos.findIndex(todo => {
              return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId){
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
              });
              state.todos.splice(index, 1);
        }

    },
    actions: {
        getUsers({commit}) {
            axios.get ('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data);   
            });
        },
        addTodo({commit}, value) {
            console.log (value);
            setTimeout( () => {
                commit('ADD_TODO', value);

            }, 2000 );
        },
        toggleTodo({commit}, payload) {
            setTimeout( () => {
                commit('TOGGLE_TODO', payload);

            }, 500 );
        },
        deleteTodo({commit}, todoId) {
            setTimeout( () => {
                commit('DELETE_TODO', todoId);

            }, 500 );
        },

    },
    getters: {
        numbercompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
});