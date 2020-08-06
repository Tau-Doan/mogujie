<template>
 <div class="user-comments">
        <div class="title">用户评价</div>
        <div class="commonet-cont">
            <div class="personInfo">
                <!-- <img :src="rate.user.avatar" alt=""> -->
                <!-- <span>{{rate.user.uname}}</span> -->
            </div>
           <div class="content">{{rate.content}}</div>
            <span class="styles">{{rate.style}}</span>
            <div class="comtpic"><img v-for="(v,i) in rate.images" :key="i" :src="v" alt=""></div>
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
            span{
                margin-left: 10px;
            }
        }
        .content{
            padding: 10px 0 5px;
        }
        .styles{
            color: #999;
        }
        .comtpic{
            padding: 4px 0;
            img{   
                width: 100px;
                height: 100px;
            }
        }
    }
}
</style>