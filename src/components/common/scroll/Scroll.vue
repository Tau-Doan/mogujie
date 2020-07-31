<template>
 <div class="wrap" ref="wrap">
     <div class="content">
         <slot></slot>
     </div>
 </div>
</template>
 
<script>
import Bsc from 'better-scroll'
export default {
    name:"Scroll",
    data(){
        return{
          scroll:null
        }
    },
    mounted(){
        //创建Bsc实例
        this.scroll = new Bsc(this.$refs.wrap,{
            click:true,
            tap:true,
            scrollY: true,
            probeType:3
        })
        //监听滚动位置
        this.scroll.on('scroll',(position)=>{
            // console.log(position);

        })
    },
    //封装一个回到顶部方法 参数:(横坐标，纵坐标，滚动时长)
    methods:{
        scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
        }
    }
}
</script>
 
<style lang="less" scoped>

</style>