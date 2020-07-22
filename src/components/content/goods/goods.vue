<template>
 <div class="goods">
     <goods-card class="goods-card" v-for="v in goods" :key="v.iid" :goodsCard="v" />
 </div>
</template>
 
<script>
import goodsCard from './goodsCard'
export default {
    name:"goods",
    data(){
        return{
          
        }
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        goodsCard,
    }
}
</script>
 
<style lang="less" scoped>
.goods{
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
}

</style>