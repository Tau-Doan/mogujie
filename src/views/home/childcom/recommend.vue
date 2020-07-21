<template>
 <div class="recommend">
     <div v-for="(v,i) in recommend" :key="i" class="recItem">
         <div class="recItems">
             <a :href="v.link"><img :src="v.image" alt=""></a>
             <div>{{v.title}}</div>
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
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
}
</script>
 
<style lang="less" scoped>
.recommend{
    width: 100%;
    height: 136px;
    display: flex;
    background-color: #ffffff;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    text-align: center;
    img{
        width: 70px;
        height: 70px;
    }
    
       

}
</style>