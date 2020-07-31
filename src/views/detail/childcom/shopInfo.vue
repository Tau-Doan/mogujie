<template>
 <div class="shopinfo-wrap">
     <div class="shop-title">
         <img :src="sInfo.shopLogo" alt="">
         <span>{{sInfo.name}}</span>
     </div>
     <div class="shop-info">
         <div class="left-info">
             <div>
                <p>{{sInfo.cSells}}</p>
                <p>总销量</p>
            </div>
             <div>
                <p>{{sInfo.cGoods}}</p>
                <p>全部宝贝</p>
            </div>
         </div>
            
         <div class="right-info">
                    <div v-for="(item,index) in sInfo.score" :key="index">
                        <span>{{item.name}}</span>
                        <span>{{item.score}}</span>
                         <span class="isBetter" v-if="!item.isBetter" style="background:green;color:white">低</span>
                         <span v-else style="background:red;color:white">高</span>
                </div>
         </div>
     </div>
     <div class="gotoStore">
         <a :href="sInfo.shopUrl" class="storeLink">进店逛逛</a>
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
        sInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
 
<style lang="less" scoped>
.shopinfo-wrap{
    width: 100%;
    height: 200px;
    background-color: #ffffff;
    .shop-title{
        display: flex;
        align-items: center;
        padding: 20px 10px 20px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        span{
            margin-left: 10px;
            font-size: #333;
        }
    }
    .shop-info{
        padding: 0 20px 20px 20px;
        display: flex;
        .left-info{
            font-size: 12px;
            flex: 1;
            display: flex;
            justify-content: space-around;
            text-align: center;
            align-items: center;
            border-right: 1px solid #ccc;

        }
        .right-info{
            flex: 1;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            margin-left: 30px;
        }
    }
    .gotoStore{
           
            font-size: 12px;
            color: #333;
            text-align: center;
            .storeLink{
                padding: 4px 30px;
                border-radius: 10px;
                background: #ccc;
            }   
        }
}
</style>