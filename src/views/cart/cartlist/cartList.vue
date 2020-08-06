<template>
 <div class="wraper">
     <div class="cart-list" >
         <div class="isSelect">
            <img class="logo" src="@/assets/img/cart/select.png" alt="">
             <div class="right">
                  <img :src="item.img" alt="">
             </div>
         </div>
         <div class="goodsInfo">
             <p class="title">{{item.title}}</p>
             <p class="sub-desc">{{item.desc}}</p>
             <div class="price-count">
                 <p class="price">￥{{item.lowPrice}}</p>
                 <p>x<span>{{item.count}}</span></p>
             </div>
         </div>
     </div>
 </div>
</template>
 
<script>
import { mapState } from "vuex";
export default {
    data(){
        return{
        }
    },
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
     computed:{
        ...mapState('cart',{
            count:'count'
        })
    }
    
}
</script>
 
<style lang="less" scoped>
.wraper{
    width: 100%;
    height: 100%;
    .cart-list{
        width: 100%;
        height: 100px;
        border-bottom: 2px solid #666;
        padding: 4px 6px 2px 6px;
        display: flex;
        align-items: center;
        .isSelect{
            height: 100%;
            flex: 30%;
            line-height: 100px;
            .logo{
                    width: 20px;
                    height: 20px;
                }
            .right{
                width: 74%;
                height: 100%;
                float: right;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .goodsInfo{
            height: 100%;
            flex:70%;
            padding: 0 6px;
            .sub-desc{
                width: 200px;
                padding: 0 0 16px 0;
                font-size: 14px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .title{
                width:200px;
                line-height: 26px;
                font-size: 14px;
                color: #333;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .price-count{
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                .price{
                    color: rgb(255, 63, 120);
                }
            }
        }

    }
}

</style>