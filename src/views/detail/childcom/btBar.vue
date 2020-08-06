<template>
 <div class="bt-nav">
     <div class="left-bt">
         <div class="store">
            <span>店铺</span>
             </div>
         <div class="asker">
             <span>客服</span>
             </div>
         <div class="collect">
             <span>收藏</span>
             </div>
     </div>
     <div class="right-bt">
         <div class="add-to-cart" @click="addtoCart">加入购物车</div>
         <div class="buy-now">立即购买</div>
     </div>
 </div>
</template>
 
<script>
import navBar from '@/components/common/navBar.vue'
import '@/assets/img/detail/fit.jpg' 
export default {
    data(){
        return{
        }
    },
    props:{
        sInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{

    },
    methods:{
        addtoCart(){
            this.$emit('addToCart')
        }
    }
}
</script>
 
<style lang="less" scoped>
.bt-nav{
    width: 100%;
    height: 44px;
    position: fixed;
    z-index: 999;
    bottom: 0;
    display: flex;
    align-content: center;
    text-align: center;
    font-size: 12px;
    .left-bt{
        flex:1;
        display: flex;
        align-items: center;
        text-align: center;
        background: #ffffff;
        .store, .asker, .collect{
            width: 100%;
            height: 100%;
            color: #333;
            line-height: 44px;
            flex:1;
            border-right: 1px solid #ccc;
            border-top: 1px solid #ccc;
            background-image: url('/asstes/img/fit.jpg');
            
        }
    }
    .right-bt{
        flex:1;
        display: flex;
        align-items: center;
        text-align: center;
        background: #ffffff;
        .add-to-cart,.buy-now{
            flex:1;
            width: 100%;
            height: 100%;
            line-height: 44px;
            border-right: 1px solid #ccc;
            border-top: 1px solid #ccc;
        }
        .add-to-cart{
            background: #ffe6e8;
            color:  #ff5777;
        }
        .buy-now{
            border-right:none;
            background: #ff5777;
            color:  #ffffff;
        }
    }
}
</style>