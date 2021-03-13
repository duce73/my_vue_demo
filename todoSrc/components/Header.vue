<template>
  <div>
      <input placeholder="请输入待办事务,回车键输入" @keyup.enter="addTodo" v-model="msg">
  </div>
</template>

<script>
export default {
  data (){
    return {
      msg : ""
    }
  },
  props : {
    addItem : Function,
  },
  methods : {
    addTodo () {
      //进行输入检查
      if(!this.msg){
        alert("请输入内容！");
      }
      //构造对象
      let msg = {
        title: this.msg,
        completed : false
      }
      //调用函数添加到todos数组中
      this.addItem(msg);
      //清楚输入框内容
      this.msg = "";
    }
  }
}
</script>

<style>

</style>