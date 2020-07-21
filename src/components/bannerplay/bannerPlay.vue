<template>
 <div>
     <mt-swipe :auto="1000">
            <mt-swipe-item>
                <slot name="banner"></slot>
            </mt-swipe-item>
    </mt-swipe> 
 </div>
</template>
 
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
export default {
    data(){
        return{
          
        }
    },
    components:{
        Swipe,
        SwipeItem
    },
}
</script>
 
<style lang="less" scoped>
    mt-swipe-item{
        width: 100%;
        height: 195px;
    }
</style>