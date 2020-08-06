// import detail from '@/views/detail/detail'

const state = {
    carts:[],
    count:null,
}

const mutations = {
    changeCart(state,d){
        // let oldCart = null //旧购物车
        //1、遍历state的购物车，通过id判断原来购物车是否有新添加的商品
        // for(let item of state.carts){
        //     if(item.id === d.id){
        //         oldCart = item //原数据保持不变
        //     }
        // }
        let oldCart = state.carts.find(item=> item.id === d.id) //表示购物车已存在新添加的商品
        if(oldCart){ //oldCart存在，则数量加1，否则，添加到购物车
            d.count += 1
        }else{
            d.count = 1
            state.carts.push(d)
        }
    }
}

const actions = {
    addCart(ctx,d){
        // console.log(ctx,d);
        ctx.commit('changeCart',d)
    }
}

const getters = {

}

export default {
    namespaced: true, //开启命名空间
    state,
    mutations,
    actions,
    getters
  }
  