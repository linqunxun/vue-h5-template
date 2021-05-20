// axios
import request from '@/utils/request'

// 获取微信公众号免登地址
export function getAuthUrl(params) {
  return request({
    url: "/wx_mp/auth_url",
    method: 'get',
    params,
  })
}

// 客户授权微信公众号
export function authByCustomer(data) {
  return request({
    url: "/wx_mp/customer/auth",
    method: 'post',
    data,
  })
}

// 客户登录
export function loginByCustomer(data) {
  return request({
    url: "/wx_mp/customer/login",
    method: 'post',
    data,
  })
}

// 获取客户信息
export function getCustomerInfo(params) {
  return request({
    url: "/wx_mp/customer",
    method: 'get',
    params,
  })
}

// 员工授权微信公众号
export function authByEmployee(data) {
  return request({
    url: "/wx_mp/employee/auth",
    method: 'post',
    data,
  })
}

// 员工登录
export function loginByEmployee(data) {
  return request({
    url: "/wx_mp/employee/login",
    method: 'post',
    data,
  })
}

// 商品兑换
export function exchangeCommodity(data) {
  return request({
    url: "/wx_mp/exchange",
    method: 'post',
    data,
  })
}
