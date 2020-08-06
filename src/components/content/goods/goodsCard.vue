<template>
 <div class="goodscard" @click="toDetail">
     <div class="good-card-wrap">
           <a href="#"><img class="show-pic" @load="imgLoad" v-lazy="showImg" :src="showImg" alt=""></a>
           <div class="card-info">
                <p class="good-card-wrap-title">{{goodsCard.title}}</p>
                <div class="price-celct">
                    <span class="price">￥{{goodsCard.price}}</span>
                     <span class="clect">{{goodsCard.cfav}}</span>
                </div>
            </div>
     </div>
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
                return {
                    id:null,
                }
            }
        }
    },
    methods:{
         toDetail(){
            var id = this.goodsCard.iid
            this.$router.push('/detail/' + id)
         },
         //监听图片加载
         imgLoad(){
             this.$bus.$emit('imageLoad')
         }
    },
    computed:{
        showImg(){
            //第一个为假，返回第二个；第一个为真，直接返回
            return this.goodsCard.image || this.goodsCard.show.img
        }
    }
}
</script>

<style lang="less" scoped>
.goodscard{
    width: 48%;
}
.good-card-wrap{
    background-color: #ffffff;
    margin-bottom: 10px;
    font-size: 12px;
    a{
        width: 100%;
        float: left;
        display: block;
    }
    img{
        width: 100%;
        border-radius: 4px;
    }
    .card-info{
        width: 150px;
        .good-card-wrap-title{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 2px 4px 0;
            text-align: center;
        }
        .price-celct{
            display: flex;
            padding: 4px 4px;
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
}

</style>