import {request} from './request.js'
import Qs from 'qs'
export function subscribe(FormData){
  return request({
      method:'get',
      url:'/subscribe/save',
      params:FormData
  })
}

export function getSubscribe(formData){
  return request({
      method: 'get',
      url:'/subscribe/list',
      params:formData
  })
}


export function deleteSubscribe(id){
  return request({
      method: 'get',
      url:'/subscribe/delete',
      params:{
        id
      }
  })
}