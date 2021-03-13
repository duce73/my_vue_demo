<template>
  <div class="container">
    <Search/>
    <UsersMain/>
  </div>
</template>

<script>
import Search from "./components/Search";
import Main from "./components/Main"



export default {
    components : {
        Search,
        UsersMain : Main
    }
}
</script>

<style>
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
</style>