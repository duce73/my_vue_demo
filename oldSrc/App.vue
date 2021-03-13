<template>
  <div>
      <h1>写出你对vue的评价</h1>
      <add :addComment="addComment"></add>
      <list v-bind:comments="comments" :deleteItem="deleteItem"></list>

  </div>
</template>

<script>
import List from './components/List.vue';
import Add from "./components/Add.vue"

export default {
    components : {
        Add,
        List
    },
    data () {
        return {
            comments : [
                {
                    name : "duce",
                    comment : "it is ok",
                },
                {
                    name : "shabi",
                    comment : "it is fine",
                },
                {
                    name : "zjg",
                    comment : "it is vuer",
                },
            ]
        }
    },
    methods : {
        addComment (item) {
            this.comments.unshift(item);
        },
        deleteItem (index){
            this.comments.splice(index,1);
        }
    }

}
</script>

<style>

</style>
