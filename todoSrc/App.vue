<template>
  <div class="center">
      <Header :addItem="addItem"/>
      <List :todos="todos" :deleteItem="deleteItem"/>
      <Footer :todos="todos" :deleteComplete="deleteComplete" :checkAll="checkAll" />
  </div>
</template>

<script>

import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer";

export default {
    components : {
        Header,
        List,
        Footer,
    },
    data (){
        return {
            todos : JSON.parse(window.localStorage.getItem("item_key")|| "[]")
            /*

            todos : [
                {title : "吃饭" , completed : false},
                {title : "睡觉" , completed : true},
                {title : "写代码", completed : true},
            ]
            */
        }
    },
    watch : {
        todos : {
            handler : function(value){
                window.localStorage.setItem("item_key",JSON.stringify(value));
            },
            deep :true
        }
    },
    methods : {
        addItem (todo) {
            this.todos.unshift(todo);
        },
        deleteItem(index){
            this.todos.splice(index,1);
        },
        //删除完成的事务
        deleteComplete() { 
            this.todos = this.todos.filter(todo => !todo.completed)
        },
        //全选或者全不选
        checkAll (ischeck) {
            this.todos.forEach(todo => todo.completed = ischeck);
        }
    }
}
</script>

<style>
.center{
    text-align: center;
}
</style>