<template>
 <div id="detail">
       <detail-coms class="detail-nav" />
       <detail-swiper class="detail-swiper" :topImages="topImages" />
       <describe :goods="goods" :sendAddress="sendAddress" />
        <shop-info :sInfo="sInfo" />   
        <detailPic :detailInfo="detailInfo"/>
        <shop-parmas :shopParmas="itemParams" :size="size"  />
        <comments :rate ="comments" />
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

import { goodsInfo ,shopsInfo ,getParams } from './childcom/detail'
import { getDetaildata } from '@/api/detail/detail.js'
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
        }
    },
    created(){
        //拿取动态id，作为url参数
        // console.log(this.$route.params.id);
        this.idd = this.$route.params.id
        this.getDetaildata(this.idd)
    },
    methods:{
    //请求详情页数据
        getDetaildata(iid){
            getDetaildata(iid).then(res=>{
                //获取展示图片
                var result = res.data.result
                console.log(result);
                var imgList = result.itemInfo.topImages
                // if(imgList.length <= 5){
                    this.topImages = imgList
                // }

                //获取商品描述
                this.goods = new goodsInfo(result.itemInfo,result.shopInfo,result.columns)
                this.sendAddress = this.goods.sendAddress.sendAddress

                //获取店铺信息
                this.sInfo = new shopsInfo(result.shopInfo)

                //获取详情图片
                this.detailInfo = result.detailInfo.detailImage[0].list

                //获取参数
                this.itemParams = new getParams(result.itemParams.info,result.itemParams.rule)
                // console.log(this.itemParams);
                this.size = this.itemParams.size[0]

                //获取评论数据
                this.comments = result.rate.list[0]

                console.log(this.comments);

            })
        },

    },
    components:{
        detailComs,
        detailSwiper,
        describe,
        shopInfo,
        detailPic,
        shopParmas,
        comments,
    }
}
</script>
 
<style lang="less" scoped>
.detail{
    position: relative;
}
.detail-nav{
    position: fixed;
    z-index: 999;
}
</style>