<template>
 <div class="detailItem">
     <div class="price">
         <div class="nowPrice">{{goods.price}}</div>
         <div class="dicount">
             <div class="highPrice">￥{{goods.highPrice}}</div>
             <span class="disc" :style="{color:goods.discountBgColor}">{{goods.discountDesc}}</span>
         </div>
     </div>
     <div class="title">【{{goods.name}}】{{goods.title}}</div>
     <div class="sendAddress">
         <div class="sendAddress-wrap">
            <span>免邮费</span>
            <span v-if="sendAddress">{{sendAddress}}</span>
            <span v-else></span>
         </div>
       </div>
     <div class="sell-slct-time">
         <div v-for="(item,index) in goods.columns" :key="index"><span>{{item}}</span></div>
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
        goods:{
            type:Object,
            default(){
                return {}
            }
        },
        sendAddress:{
            type:String,
            default(){
                return ''
            }
        }
    },

}
</script>
 
<style lang="less" scoped>
.detailItem{
    width: 100%;
    height: 200px;
    // padding: 0 8px;
    // background-color: #fcfcfc;
    // background-color: skyblue;
    .price{
        display: flex;
        align-items: center;
        padding: 10px 10px;
        background: #ffffff;
        .nowPrice{
            font-size: 26px;
        }
        .dicount{
            font-size: 12px;
            margin-left: 6px;
            .highPrice{
                color:#999;
                text-decoration: line-through;
            }
            .disc{
                padding: 0 2px 2px;
                text-align: center;
                background-color: rgb(255, 232, 238);
            }
        }
    }
    .title{
        font-size: 14px;
        color: #333;
        padding: 0 10px 10px;
        background: #ffffff;
    }
    .sendAddress{
        width: 100%;
        background: #ffffff;
        margin-top: 10px;
        padding: 4px 10px;
        .sendAddress-wrap{
            display: flex;
             justify-content: space-between;
             color: #999;
             font-size: 12px;
             line-height: 26px;
        }
    }
    .sell-slct-time{
        background: #ffffff;
        margin-top: 10px;
        padding: 10px 10px;
        display: flex;
        padding-bottom: 6px;
        justify-content: space-between;
        font-size: 12px;
        color: #999;
    }
}
</style>