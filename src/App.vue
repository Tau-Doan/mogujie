<template>
 <div>
     <router-view></router-view>
 </div>
</template>
 
<script>
import axios from 'axios'
export default {
    data(){
        return{
          
        }
    }
}
</script>
 
<style lang="less">
/* 全局样式 */
html,body,#app{
    width: 100%;
    height: 100%;
    // background-color: #f1f1f1;
    background-color: #ffffff;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    list-style: none;
}
a{
    color:#333;
}

</style>