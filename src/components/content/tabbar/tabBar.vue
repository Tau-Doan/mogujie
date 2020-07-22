<template>
 <div class="tabBar">
        <div class="tab-item" @click="getIndex(index,item)" v-for="(item,index) in titles" :key="index">
            <span :class="{ active:index === curIndex }">{{item}}</span>
        </div>
 </div>
</template>
 
<script>
export default {
    name:"tabBar",
    data(){
        return{
          curIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        getIndex(index){
            this.curIndex = index
            this.$emit('tabClick',index)
            
        }
    }
}
</script>

<style lang="less" scoped>
.tabBar{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    z-index: 9;
    .tab-item{
        flex: 1;
        span{
            padding: 4px;
            font-size: 14px;
        }
        .active{
            color: rgb(255, 63, 120);
            border-bottom: 2px solid rgb(255, 63, 120);
        }   
        
    }
}

</style>

