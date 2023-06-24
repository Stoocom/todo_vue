<template>
    <div class="list">
        <div class="list_content">
            <input type="checkbox" class="custom-checkbox" v-model="todo.completed" @click="updateTodo({ ...todo, completed: !this.todo.completed})">
            <span v-if="!editing" class="text">{{todo.title}}</span>
            <input v-else type="text" class="text" v-model="todo.title">
        </div>
        <div class="buttons_group">
          <button class="btn" @click="updateTodoT(todo)">{{editing ? "Update" :"Edit"}}</button>
          <button class="btn" @click="deleteTodo(todo.id)">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {}
  },
  data() {
    return {
      editing: false,
    }
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    updateTodoT(todo) {
      this.todoText = todo.title;
      this.editing = !this.editing;
      if (!this.editing) {
        this.todoText = todo.title;
        this.updateTodo(todo);
      }
    }
  },
  data() {
    return {
      editing: false,
    };
  },
};
</script>

<style>
  .container {
    height: 100%; 
    width: 100%;
    display: flex;
    padding: 2rem;
    flex-direction: column;
  }
  .list {
    height: 56px;
    width: 100%;
    padding: 5px;
    margin: 5px 0;
    border-radius: 5px;
    background-color: lightgreen;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .list_content {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 10px;
    align-items: center;
  }
  .buttons_group {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-right: 10px;
  }
  .custom-checkbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    cursor: pointer;
    outline: 0 !important;
  }
</style>