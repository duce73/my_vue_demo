<template>
  <div>
      <input type="checkbox" v-model="ischeck">
      <p>完成数量{{completeNum}}/总数{{todos.length}}</p>
      <button v-show="completeNum > 0" @click="deleteTodos">删除所有完成事务</button>
  </div>
</template>

<script>
export default {
  props : {
    todos : Array,
    deleteComplete : Function,
    checkAll : Function
  },
  methods : {
    deleteTodos () {
      this.deleteComplete();
    }
  },
  computed : {
    completeNum (){
      return this.todos.reduce((total, todo) => total + (todo.completed?1:0),0)
    },
    ischeck : {
      get (){
        return this.completeNum === this.todos.length && this.todos.length > 0;
      },
      set (value){
        this.checkAll(value);
      }
    }
  }
}
</script>

<style>

</style>