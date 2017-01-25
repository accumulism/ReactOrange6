import Todo from './Todo';
import { findIndex } from 'lodash';
import makeRiver from './makeRiver';
export default class TodoDomain {
    constructor() {
        this.todos = {};
        this.store = makeRiver();
    }

    addTodo(descriptionText) {
        const newTodo = new Todo(descriptionText);
        newTodo.domain = this;
        this.todos[newTodo.id] = newTodo;
        return newTodo;
    }

    archiveToggleTodo(todoId) {
        this.todos[todoId].isDone = !this.todos[todoId].isDone
    }

    removeTodo(todoId) {
        delete this.todos[todoId];
    }

    getAllTodos() {
        return Object.keys(this.todos).map((each) => this.todos[each]);
    }
}