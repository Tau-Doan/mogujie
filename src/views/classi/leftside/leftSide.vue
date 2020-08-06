<template>
 <div class="leftSide-wrap">
     <div class="left-side">
         <div class="side-item" v-for="item in category" :key="item.maitKey">
             {{item.title}}
         </div>
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
        category:{
            type:Array,
            default(){
                return []
            }
        }
    }
   
}
</script>
 
<style lang="less" scoped>
.leftSide-wrap{
    .left-side{
        width: 24%;
        height: 568px;
        overflow: hidden;
        display: flex;
        text-align: center;
        flex-direction: column;
        color: #666666;
        font-size: 12px;
        .side-item{
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: #f1f1f1;
        }
    }
}
</style>