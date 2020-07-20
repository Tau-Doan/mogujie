<template>
   <div class="footer">
       <router-link :to='v.to' v-for="(v) in tabList" :key="v.name">
           <div class="card">
               <img :src="v.logosrc" alt="">
               {{v.name}}
           </div>
       </router-link>
   </div>
</template>
 
<script>
export default {
    data(){
        return{
          tabList:[
              { 
                name:'首页',
                to:'/home'
              },
              { 
                  name:'分类', 
                  to:'/classi'
                  },
              { 
                  name:'购物车', 
                  to:'/cart'
                  },
              { 
                  name:'我的', 
                  to:'/profile'
                  },
            ],
        }
    },
}
</script>
 
<style lang="less" scoped>
.footer{
    width: 100%;
    height: 49px;
    background-color: #fcfcfc;
    position: fixed;
    display: flex;
    justify-content: space-around;
    line-height : 49px;
    bottom: 0;
    .active .card{
        color: rgb(255, 63, 120);
   }
    .card{
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 49px;
        color: #000;
        font-size: 14px;
        img{
            width: 24px;
            height: 24px;
        }
    }
            
}

</style>