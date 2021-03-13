<template>
<div>
        <br>
          {{comment.name}}
        <br/>
          {{comment.comment}}
        <button @click="deleteComment">
            删除
        </button>
</div>
</template>

<script>
export default {
    props : { 
        comment : Object,
        deleteItem : Function,
        index : Number
    },
    methods : {
        deleteComment (){
            if(window.confirm(`确定删除${this.comment.name}的评论吗`)){
                this.deleteItem(this.index);
            }
        }
    }
}
</script>

<style>

</style>