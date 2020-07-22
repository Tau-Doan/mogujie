<template>
 <div id="home">
    <nav-bar class="home-nav-bg"><div slot="center">购物街</div></nav-bar>
    <home-swipe :bannerList = "bannerList" />
    <recommend :recommend = "recommend" />
    <home-pop />
    <tab-bar @tabClick="tabClick" class="tabContrl" :titles="['流行','新款','精选',]" />
    <goods :goods= "showGoods" />
 </div>
</template>
 
<script>
import homeSwipe from './childcom/homeSwipe'
import recommend from './childcom/recommend'
import homePop from './childcom/homePop'

import navBar from '@/components/common/navBar.vue'
import goods from '@/components/content/goods/goods'
import tabBar from '@/components/content/tabBar/tabBar'

import { getHomeBannerdata, getHomeRecommenddata } from '@/api/home/home.js'

export default {    
    data(){
        return{
          bannerList:[],
          recommend:[],
          curType:'pop',
          //数据模型
          goods:{
              'pop':{ page:0,list:[] },
              'new':{ page:0,list:[] },
              'sell':{ page:0,list:[] },
            }
        }
    },
    components:{
        goods,
        navBar,
        tabBar,
        homeSwipe,
        recommend,
        homePop,
    },
    computed:{
        showGoods:function(){
          return this.goods[this.curType].list
        }
    },
    created(){
        this.getHomeBannerdata()
        this.getHomeRecommenddata('pop')
        this.getHomeRecommenddata('new')
        this.getHomeRecommenddata('sell')
    },
    methods:{
        //事件监听方法
        tabClick(index){
            if( index === 0 ){
                this.curType = 'pop'
            }else if( index === 1 ){
                this.curType = 'new'
            }else{
                this.curType = 'sell'
            }
        },
        //请求数据方法
        getHomeBannerdata(){
            getHomeBannerdata().then(res=>{
             this.bannerList = res.data.data.banner.list
             this.recommend = res.data.data.recommend.list
            })
        },
        getHomeRecommenddata(type){
            const page = this.goods[type].page + 1
            getHomeRecommenddata(type,page).then(res=>{
             var goodlist = res.data.data.list
            //  console.log(goodlist)
             this.goods[type].list.push(...goodlist)
             this.goods[type].page += 1
            })
        },
    }
}
</script>
<style lang="less" scoped>
#home{
    padding-top: 44px;
}
.home-nav-bg{
    background-color: rgb(255, 63, 120);
    color: white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
}
.tabContrl{
    position: sticky;
    top: 40px;
}

</style>