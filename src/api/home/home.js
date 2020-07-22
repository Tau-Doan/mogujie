import { request } from '../request'

export function getHomeBannerdata(){
    return request({
        url:'/home/multidata'
    })
}
export function getHomeRecommenddata(type,page,){
    return request({
        url:'/home/data',
        params:{
            type,
            page,
        }
    })
}