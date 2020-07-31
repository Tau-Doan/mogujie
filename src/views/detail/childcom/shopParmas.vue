<template>
 <div class="parmas">
     <!-- <div v-for="(item,index) in size" :key="index">
         <span v-for="(v,i) in item" :key="i">{{v}}</span>
     </div> -->
     <table class="size" border="1" cellspacing="0">
         <tr v-for="(item,index) in size" :key="index">
             <td v-for="(v,i) in item" :key="i">{{v}}</td>
         </tr>
     </table>
     <table class="set" border="1" cellspacing="0">
         <tr v-for="(item,index) in shopParmas.set" :key="index">
             <td>
                 <div class="key">{{item.key}}</div>
            </td>
            <td>
                 <div class="value">{{item.value}}</div>
            </td>
         </tr>
     </table>
 </div>
</template>
 
<script>
export default {
    data(){
        return{
          
        }
    },
    props:{
        shopParmas:{
            type:Object,
            default(){
                return {}
            }
        },
        size:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
 
<style lang="less" scoped>
.parmas{
    .size{
        width: 100%;
        text-align: center;
        margin-top: 10px;
        background: #ffffff;
        border-collapse: collapse;
        font-size: 14px;
        td{
            height: 30px;
        }
    }
    .set{
        width: 100%;
        margin-top: 10px;
        background: #ffffff;
        text-align: center;
        border-collapse: collapse;
        font-size: 14px;
        .key{
            text-align: center;
            width:50px;
            padding: 4px 10px;
        }
    }
}

</style>