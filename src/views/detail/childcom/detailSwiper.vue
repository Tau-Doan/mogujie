<template>
 <div class="detailSwiper-wrap">
     <mt-swipe :auto="3000" class="topimg-Wrap">
        <mt-swipe-item v-for="(v,i) in topImages" :key="i" class="topimgCard">
            <img :src="v" alt="图片加载失败">
        </mt-swipe-item>
    </mt-swipe>
 </div>
</template>
 
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    data(){
        return{
          
        }
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
      'mt-swipe': Swipe,
       'mt-swipe-item': SwipeItem,
    }
}
</script>
 
<style lang="less" scoped>
.topimg-Wrap{
    width: 100%;
    height:250px;
    .topimgCard{
        img{
            width: 100%;
            height: 250px;
         }
    } 
}
</style>