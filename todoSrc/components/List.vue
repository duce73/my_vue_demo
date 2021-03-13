<template>
  <div>
      <item v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" :deleteItem="deleteItem"></item>
  </div>
</template>

<script>

import Item from "./Item.vue"
export default {
    components : {
        Item,
    },
    props : {
        todos : Array,
        deleteItem : Function
    }
}
</script>

<style>

</style>