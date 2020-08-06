import { request } from '../request'

export function getDetaildata(id){
    return request({
        url:'/detail',
        params:{
            iid:id
        }
    })
}
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}
