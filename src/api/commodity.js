// axios
import request from '@/utils/request'

// 获取商品列表
export function getCommodityList(params) {
  return request({
    url: "/wx_mp/commodity",
    method: 'get',
    params,
  })
}
