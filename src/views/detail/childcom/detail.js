export class goodsInfo{
     //将请求数据重组为一类##### 分类
     constructor(itemInfo,shopInfo,columns){
          this.title = itemInfo.title
          this.highPrice = itemInfo.highPrice
          this.price = itemInfo.price
          this.discountBgColor = itemInfo.discountBgColor
          this.services = shopInfo.services
          this.columns = columns
          this.sendAddress = itemInfo.extra
          this.discountDesc = itemInfo.discountDesc
          this.name = shopInfo.name
     }
}

export class cartInfo{
     //将请求数据重组为一类##### 分类
     constructor(itemInfo,detailInfo){
          this.title = itemInfo.title
          this.img = itemInfo.topImages[0]
          this.lowPrice = itemInfo.lowPrice
          this.id = itemInfo.shopId
          this.desc = detailInfo.desc
     }
}

export class shopsInfo{
     //将请求数据重组为一类##### 分类
     constructor(shopInfo){
          this.name = shopInfo.name
          this.shopLogo = shopInfo.shopLogo
          this.cSells = shopInfo.cSells
          this.cGoods = shopInfo.cGoods
          this.score = shopInfo.score
          this.shopUrl = shopInfo.shopUrl
     }
}
export class getParams{
     //将请求数据重组为一类##### 分类
     constructor(info,rule){
        this.set = info.set
        this.size = rule.tables
     }
}
