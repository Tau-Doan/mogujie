<template>
 <div class="back-to-top">
     <img src="@/assets/img/common/top.png" alt="">
 </div>
</template>
 
<script>
export default {
    name:"backTop",
    data(){
        return{
          
        }
    }
}
</script>
 
<style lang="less" scoped>
.back-to-top{
    position: fixed;
    bottom: 50px;
    right: 10px;
    img{
        width: 50px;
        height: 50px;
    }
}
</style>