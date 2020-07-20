<template>
 <div>
     <router-view></router-view>
     <footer-bar></footer-bar>
 </div>
</template>
 
<script>
import footerBar from '@/components/common/footerBar.vue';
export default {
    data(){
        return{
          
        }
    },
    components:{
        footerBar,
    }
}
</script>
 
<style lang="less">
/* 全局样式 */
html,body,#app{
    width: 100%;
    height: 100%;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
}

</style>