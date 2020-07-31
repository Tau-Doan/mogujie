<template>
 <div id="home" class="wrap">
     <nav-bar class="home-nav-bg"><div slot="center">购物街</div></nav-bar>
     <Scroll class="content" ref="scrollCom">
         <home-swipe :bannerList = "bannerList" />
        <recommend :recommend = "recommend" />
        <home-pop />
        <tab-bar @tabClick="tabClick" class="tabContrl" :titles="['流行','新款','精选',]" />
        <keep-alive>
            <goods :goods= "showGoods" v-if="$route.meta.keepAlive" />
        </keep-alive>
     </Scroll>
     <back-top v-if="flag" @click.native="backTotop" />
     <footer-bar />
 </div>
</template>
 
<script>

import homeSwipe from './childcom/homeSwipe'
import recommend from './childcom/recommend'
import homePop from './childcom/homePop'

import navBar from '@/components/common/navBar.vue'
import goods from '@/components/content/goods/goods'
import tabBar from '@/components/content/tabBar/tabBar'
import footerBar from '@/components/common/footerBar'
import Scroll from '@/components/common/scroll/Scroll'
import backTop from '@/components/common/backtop/backTop'

import axios from 'axios'

import { getHomeBannerdata, getHomeRecommenddata } from '@/api/home/home.js'

export default {    
    data(){
        return{
          bannerList:[],
          recommend:[],
          curType:'pop',
          scroll:null,
          flag:false,
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
        footerBar,
        homeSwipe,
        recommend,
        homePop,
        Scroll,
        backTop
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
             console.log(goodlist)
             this.goods[type].list.push(...goodlist)
             this.goods[type].page += 1
            })
        },
        //监听回到顶部的点击事件
        backTotop(){
            // console.log(this.$refs.scrollCom);
            this.$refs.scrollCom.scrollTo(0,0)
        }
    },
  
}
</script>
<style lang="less" scoped>
.content{
    height: calc(100vh - 93px); 
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
}
#home{
    position: relative;
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