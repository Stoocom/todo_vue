<template>
  <div class="todo">
    <div>
      <input 
        v-model="todoText"
        @change="todoTextChange"
        type="text"
        class="text"
        >
      <button class="btn" @click="addTodoInput">Add</button>
    </div>
    <div v-for="todo in todoList" :key="todo.id">
      <Todo :todo="todo"/>
    </div>
    {{ $store.state.filter }}
  </div>
</template>

<script>
import Todo from '../components/Todo.vue';
import {computed} from 'vue';
import {mapActions, useStore} from "vuex";
import { v1 } from "uuid";

export default {
  name: 'TodoPage',
  components: {
    Todo
  },
  data() {
    return {
      todoText: "12",
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    addTodoInput() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
        completed: false,
        editing: false
      });
      this.todoText = "";
    }
  },
  setup() {
    const store = useStore();

    let todoList = computed(function () {
      return store.state.todoList
    });
    return {
      todoList,
 
    }
  }
}
</script>

<style>
  .todo {
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    .test {
     display: flex;
     align-items: center;
    }
  } 
</style>
