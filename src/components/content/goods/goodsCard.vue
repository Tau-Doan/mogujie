<template>
 <div class="goodscard">
     <ul>
         <li class="good-card-wrap">
             <a :href="goodsCard.link"><img v-lazy="goodsCard.show.img" class="show-pic" :src="goodsCard.show.img" alt=""></a>
                    <p class="good-card-wrap-title">{{goodsCard.title}}</p>
                <div class="content">
                    <span class="price">￥{{goodsCard.price}}</span>
                     <span class="clect">{{goodsCard.cfav}}</span>
                </div>
         </li>
     </ul>
 </div>
</template>
 
<script>
import { Lazyload } from 'mint-ui';
export default {
    name:"goodsCard",
    data(){
        return{
          img:'/assets/img/detail/detail_bottom'
        }
    },
    props:{
        goodsCard:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="less" scoped>
.goodscard{
    display: flex;
}
.good-card-wrap{
    width: 150px;
    background-color: #ffffff;
    margin-bottom: 10px;
    padding-bottom: 4px;
    font-size: 12px;
    .good-card-wrap-title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 2px 4px 0;
        text-align: center;
    }
    .show-pic{
        width: 150px;
        height: 210px;
        border-radius: 4px;
    }
    .content{
        display: flex;
        padding:0 4px ;
        justify-content: space-between;
        .price{
            font-weight: bold;
            font-size: 12px;
            color: rgb(255, 63, 120);
        }
        .clect::after{
            content: '';
            background-image: url('~@/assets/img/detail/detail_bottom.png');
            display:inline-block;
            background-size: 100%;
            font-size: 10px;
            width: 14px;
            height: 14px;
            position: relative;
            top: 3px;
        }
    }
}

</style>