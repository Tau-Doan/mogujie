import { request } from '../request'

export function getHomeBannerdata(){
    return request({
        url:'/home/multidata'
    })
}
export function getHomeRecommenddata(){
    return request({
        url:'/home/data?type=pop&page=2'
    })
}