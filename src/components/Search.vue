<template>
<div>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="username" @keyup.enter="getUser"/>
        <button @click="getUser" >Search</button>
      </div>
    </section>
</div>
</template>

<script>
import PubSub from "pubsub-js"

export default {
    data () {
        return {
            username : "",
        }
    },
    methods : {
        getUser () {
            const searchName = this.username;
            if(this.username){
                PubSub.publish("search", searchName)
            }

        }
    }
}
</script>

<style>
.jumbotron {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    color: inherit;
    background-color: #eee;
}
</style>