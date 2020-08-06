<template>
 <div class="wrap">
      <nav-bar>
          <div class="navBack" @click="backToHome" slot="left">
              <img src="@/assets/img/common/back.svg" alt="">
          </div>
          <div class="tabName" slot="center">
           <div :class="{ active:curIndex === index }" @click="getCurIndex(index)" v-for="(item,index) in tabNameList" :key="index">{{item}}</div>
          </div>
    </nav-bar>
 </div>
</template>
 
<script>
import navBar from '@/components/common/navBar'
export default {
    data(){
        return{
          tabNameList:[ '商品','参数','评论','推荐',],
          curIndex:0, 
        }
    },
    props:{
        py:{
            type:String,
            default(){
                return ''
            }
        },
    },
    components:{
        navBar,
    },
    methods:{
        backToHome(){
            this.$router.replace('/home')
        },
        //子传父
        getCurIndex(index){
            // console.log('n',this.n);
            this.curIndex = index
            this.$emit('tabClick',index)
            // console.log(this.py);
        },
    }
}
</script>
 
<style lang="less" scoped>
@color:rgb(255, 63, 120);
.wrap{
    width: 100%;
    background-color: #fcfcfc;
    .navBack{
        line-height: 48px;
        img{
            width: 18px;
            height: 18px;
        }
    }
    .tabName{
        display: flex;
        justify-content: space-around;
        div{
            font-size: 14px;
        }
        .active{
            color: @color;
        }
    }   
}



</style>