<template>
 <div>
     <mt-swipe :auto="3000" class="banner-Wrap">
        <mt-swipe-item v-for="(v,i) in bannerList" :key="i" class="bannerCard">
            <a :href="v.link"><img :src="v.image" alt="图片加载失败"></a>
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
        bannerList:{
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
.banner-Wrap {
    width: 100%;
    height: 195px;
    .bannerCard{
        img{
            width: 100%;
            height: 195px;
         }
    } 
}
</style>