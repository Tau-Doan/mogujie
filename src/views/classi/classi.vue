<template>
 <div id="classiWrap">
      <nav-bar class="search-bar">
          <div slot="left" class="left">
              <img src="@/assets/img/classi/chat.png" alt="">
          </div>
          <div slot="center">
              <input type="text" placeholder="睡衣">
          </div>
          <div slot="right" class="right">
               <img src="@/assets/img/classi/cart.png" alt="">
          </div>
       </nav-bar> 
   
        <div></div>
    <left-side :category="category" />
    <footer-bar></footer-bar>
 </div>
</template>
 
<script>
import leftSide from './leftside/leftSide'
import footerBar from '@/components/common/footerBar.vue'
import navBar from '@/components/common/navBar.vue'

import { getCategory } from '@/api/classi/classi'
export default {
    data(){
        return{
         category:[]
        }
    },
    methods:{

    },
     created(){
        this.getCategory()
        // this.getSubategory()
    },
    methods:{
        //请求分类标题数据
      async getCategory(){
           var res = await getCategory()
           console.log(res.data.data.category.list);
           this.category = res.data.data.category.list
        },
        //请求分类标题数据
    //   async getSubategory(){
    //        var res = await getSubategory()
    //        console.log(res.data.data.list);
           
    //     }
    },
    components:{
        footerBar,
        navBar,
        leftSide,
    }
}
</script>
 
<style lang="less" scoped>
#classiWrap{
    padding-top: 44px;
    .search-bar{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        background: #ffffff;
        border-bottom: 1px solid #e5e5e5;
        input{
            width: 100%;
            border: none;
            border-radius: 3px;
            background: #eee;
            height: 26px;
            color: #999;
            padding-left: 10px;
        }
        .left{
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
            img{
                width: 20px;
                height: 20px;
            }
        }
        .right{
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
            img{
                width: 24px;
                height: 24px;
            }
        }  
    }
}

</style>