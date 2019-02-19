import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;


export const page_list = (page,size,params) => {
  //将json对象转成key/value对
  let query = querystring.stringify(params)
  return http.requestQuickGet(apiUrl + '/cms/page/list/' + page + '/' + size + '?' + query);
}
