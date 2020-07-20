<template>
 <div id="home">
     <nav-bar class="home-nav-bg"><div slot="center">购物街</div></nav-bar>
 </div>
</template>
 
<script>
import navBar from '@/components/common/navBar.vue';
export default {
    data(){
        return{
          
        }
    },
    components:{
        navBar,
    }
}
</script>
<style lang="less" scoped>
.home-nav-bg{
    background-color: rgb(255, 63, 120);
    color: white;
}
</style>