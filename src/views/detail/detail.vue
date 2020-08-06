<template>
 <div id="detail">
       <detail-coms class="detail-nav" @tabClick="getCurIndex" />
        <Scroll class="content" ref="scrollCom" :probe-type="3" @scroll="getPos">
            <detail-swiper class="detail-swiper" :topImages="topImages" ref="goods"/>
            <describe :goods="goods" :sendAddress="sendAddress" />
            <shop-info :sInfo="sInfo" />   
            <detailPic :detailInfo="detailInfo"/>
            <shop-parmas :shopParmas="itemParams" :size="size" ref="parmas" />
            <comments :rate ="comments" ref="comments" />
            <goods :goods="goodsCard" ref="recommend" />
        </Scroll>
        <back-top @click.native="goTop" />
        <bt-bar :sInfo="sInfo" @addToCart="addCart(carts)" />
 </div>
</template>
 
<script>
import detailComs from './childcom/detailComs'
import detailSwiper from './childcom/detailSwiper'
import describe from './childcom/describe'
import shopInfo from './childcom/shopInfo'
import detailPic from './childcom/detailPic'
import shopParmas from './childcom/shopParmas'
import comments from './childcom/comments'
import btBar from './childcom/btBar'

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import Scroll from '@/components/common/scroll/Scroll'
import backTop from '@/components/common/backtop/backTop'
import goods from '@/components/content/goods/goods'

import { goodsInfo ,shopsInfo ,getParams ,cartInfo} from './childcom/detail'
import { getDetaildata ,getRecommend  } from '@/api/detail/detail.js'
export default {
    data(){
        return{
          idd:null,
          topImages:[],
          goods:{},
          sInfo:{},
          sendAddress:null,
          detailInfo:[],
          itemParams:{},
          size:[],
          comments:{},
          goodsP:null,
          parmasP:null,
          commentP:null,
          recommendP:null,
          goodsCard:[],
          carts:[],
        }
    },
    created(){
        // console.log(this.$route.params.id);
        this.idd = this.$route.params.id
        this.getDetaildata(this.idd),
        this.getRecommend()
        //解决图片加载bug
        // this.$bus.$on('detailload',()=>{
        //     this.$refs.scrollCom.refresh()
        // })
    },
    methods:{
        //请求详情页数据
        getDetaildata(iid){
            getDetaildata(iid).then(res=>{
                var result = res.data.result
                console.log(result);

                //获取展示图片
                var imgList = result.itemInfo.topImages
                this.topImages = imgList

                //获取商品描述
                this.goods = new goodsInfo(result.itemInfo,result.shopInfo,result.columns)
                this.sendAddress = this.goods.sendAddress.sendAddress

                //获取店铺信息
                this.sInfo = new shopsInfo(result.shopInfo)
                //获取详情图片
                this.detailInfo = result.detailInfo.detailImage[0].list

                //获取商品参数
                this.itemParams = new getParams(result.itemParams.info,result.itemParams.rule)
                this.size = this.itemParams.size[0]

                //获取评论数据
                this.comments = result.rate.list[0]

                //获取购物车数据
                this.carts = new cartInfo(result.itemInfo,result.detailInfo)
                // console.log(this.carts);
            })
        },
        //获取推荐数据
        getRecommend(){
            getRecommend().then(res=>{
                console.log(res.data.data.list);
                this.goodsCard = res.data.data.list
            })
        },
        //回到顶部
        goTop(){
             this.$refs.scrollCom.scrollTo(0,0)
        },
        //联动效果
         getCurIndex(index){
            // console.log(index);
            if(index === 0){
                 this.goodsP = this.$refs.goods.$el.offsetTop
                 this.$refs.scrollCom.scrollTo(0,-this.goodsP)
            }else if(index === 1){
                 this.parmasP = this.$refs.parmas.$el.offsetTop
                 this.$refs.scrollCom.scrollTo(0,-this.parmasP)
            }else if(index === 2){
                 this.commentP = this.$refs.comments.$el.offsetTop  
                 this.$refs.scrollCom.scrollTo(0,-this.commentP)
            }else if(index ===3){
                 this.recommendP = this.$refs.recommend.$el.offsetTop  
                 this.$refs.scrollCom.scrollTo(0,-this.recommendP)
            }
        },
        //获取当前位置
        getPos(position){
            var py = position.y
            if( py > -this.parmasP ){
                this.nindex = 0;
            }
            if( py < -this.parmasP && py > -this.commentP ){
                this.nindex = 1;
            }
        },
        ...mapActions({
            addCart:'cart/addCart'
        }),
    },
    components:{
        detailComs,
        detailSwiper,
        describe,
        shopInfo,
        detailPic,
        shopParmas,
        comments,
        backTop,
        Scroll,
        goods,
        btBar,
    },
}
</script>
 
<style lang="less" scoped>
.content{
    height: calc(100vh - 44px); 
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
}
.detail{
    position: relative;
}
.detail-nav{
    position: fixed;
    z-index: 999;
}
</style>