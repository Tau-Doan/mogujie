<template>
 <div>
     <nav-bar>
         <div class="cart-nav-bg" slot="center">购物车(0)</div>
     </nav-bar>
     <div></div>
    <cart-list v-for="item in carts" :key="item.id" :item="item" />
    <footer-bar></footer-bar>
 </div>
</template>
 
<script>
import footerBar from '@/components/common/footerBar.vue'
import { mapState } from "vuex";
import navBar from '@/components/common/navBar.vue'

import cartList from './cartlist/cartList'
export default {
    data(){
        return{
          
        }
    },
    components:{
        footerBar,
        navBar,
        cartList,
    },
    computed:{
        ...mapState('cart',{
            carts:'carts'
        })
    }
}
</script>
 

<style lang="less" scoped>
.cart-nav-bg{
    background-color: rgb(255, 63, 120);
    color: white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
}
</style>