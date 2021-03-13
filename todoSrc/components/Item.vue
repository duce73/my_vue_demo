<template>
  <div>
      <p @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background : bgColor}">
        <input type="checkbox" v-model="todo.completed">
        {{todo.title}}
        <button type="button" @click="deletetodo" v-show="isShow">删除</button>
      </p>
  </div>
</template>

<script>
export default {
    props : {
        todo : Object,
        index : Number,
        deleteItem : Function,
    },
    data () {
        return {
            bgColor : "white",
            isShow : false
        }
    },
    methods : {
        deletetodo () {
            //确定是否删除
            if(window.confirm("确定删除吗")){
                this.deleteItem(this.index);
            }
        },
        handleEnter (isEnter) {
            if(isEnter){
                this.bgColor = "gray";
                this.isShow = true;
            }
            else{
                this.bgColor = "white";
                this.isShow = false
            }
        }
    }
}
</script>

<style>

</style>