import { request } from '../request'

export function getCategory(){
    return request({
        url:'/category'
    })
}

export function getSubategory(){
    return request({
        url:'/subcategory/detail',
        params: {
            miniWallkey:582,
            type:sell
          }
    })
}