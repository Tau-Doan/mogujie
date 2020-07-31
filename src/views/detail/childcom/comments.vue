<template>
 <div class="user-comments">
        <div class="title">用户评价</div>
        <div class="commonet-cont">
            <div class="personInfo">
                <!-- <img :src="rate.user.avatar" alt=""> -->
                <!-- <span>{{rate.user.uname}}</span> -->
            </div>
           <div class="content">{{rate.content}}</div>
            <span class="style">{{rate.style}}</span>
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
        rate:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
 
<style lang="less" scoped>
.user-comments{
    background: #ffffff;
    padding: 10px 10px 20px;
    margin-top: 10px;
    .title{
        font-size: 16px;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
    }
    .commonet-cont{
        font-size: 12px;
        padding: 10px 0 ;
        .personInfo{
            display: flex;
            align-items: center;
            img{
                 border-radius: 50%;
                 width: 30px;
                 height: 30px;
                 }
            span{
                margin-left: 10px;
            }
        }
        .content{
            padding: 10px 0 5px;
        }
        .style{
            color: #999;
        }
    }
}
</style>