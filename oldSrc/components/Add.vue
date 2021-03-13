<template>
  <div>
      <label>姓名</label>
      <input placeholder="姓名" v-model="name">
      <label>评价</label>
      <input placeholder="评价" v-model="comment">
      <button @click="add">添加组件</button>
  </div>
</template>

<script>
export default {
  props : {
    addComment : Function,
  },
  data (){
    return {
      name : "",
      comment : ""
    }
  },
  methods : { 
    add () {
      //检查输入的合法性
      const name = this.name.trim();
      const comment = this.comment.trim();
      if(!name || !comment){
        alert("请输入姓名/评论");
        return;
      }
      //将数据打包成一个comment对象
      let Item = {
        name : name,
        comment : comment
      }
      //将数据添加到数组中
      this.addComment(Item);

      this.name = "";
      this.comment = "";
    }
  }
}
</script>

<style>

</style>