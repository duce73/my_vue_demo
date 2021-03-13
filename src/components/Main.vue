<template>
    <div>
        <h2 v-if="firstview">输入用户名进行搜索</h2>
        <h2 v-if="loading">正在加载...</h2>
        <h2 v-if="errMsg">{{errMsg}}</h2>
        <div class="row" v-if="users">
            <div class="card" v-for="(user,index) in users" :key="index">
                <a :href="user.url" target="_blank">
                <img :src="user.image" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import PubSub from "pubsub-js"
import axios from "axios"
export default {
    data () {
        return {
            firstview : true,
            loading : false,
            users : null,
            errMsg : ""
        }
    },
    mounted () {
        //订阅消息
        PubSub.subscribe("search",(msg,username) => {
            const url = `https://api.github.com/search/users?q=${username}`;
            this.firstview = false;
            this.loading = true;
            this.users = null;
            this.errMsg = "";
            axios.get(url).then(res=>{
                const result = res.data;
                const users = result.items.map(item => ({
                    url : item.html_url,
                    image : item.avatar_url,
                    name : item.login
                }));
                this.loading = false;

                this.users = users;
            }).catch(err=>{
                this.loading = false;
                this.errMsg = err;
            })
        })
    }
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>