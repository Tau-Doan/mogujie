<template>
 <div class="detailPic">
     <div v-for="(item,index) in detailInfo" :key="index">
         <img :src="item" alt="">
     </div>
 </div>
</template>
 
<script>
export default {
    data(){
        return{
          
        }
    },
    props:{
        detailInfo:{
            type:Array,
            default(){
                return []
            }
        }
    },
    //解决
    // methods:{
    //     picload(){
    //         this.$bus.$emit('detailload')
    //     }
    // }
}
</script>
 
<style lang="less" scoped>
.detailPic{
    width: 100%;
    background: #ffffff;
    margin-top: 10px;
    padding: 6px 0;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>