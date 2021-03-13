<template>
  <div>
    <h2 v-show="comments.length == 0">请添加评论</h2>
    <item v-for="(item,index) in comments" :key="index" :comment="item" :deleteItem="deleteItem" :index="index"></item>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  components: { Item },
    props : ["comments","deleteItem"],
}
</script>

<style>

</style>