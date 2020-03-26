import {request} from './request.js'
import Qs from 'qs'

export function addProduct(FormData){
  return request({
      method: 'post',
      url:'/press/save',
      data:FormData
  })
}

export function getProduct(formData){
  return request({
      method: 'post',
      url:'/press/list',
      data:Qs.stringify(formData)
  })
}


export function deleteProduct(id){
  return request({
      method: 'post',
      url:'/press/delete',
      data:Qs.stringify(id)
  })
}



export function findProduct(id){
  if(typeof id !== 'object'){
    id = {
      id
    }
  }
  return request({
      method: 'post',
      url:'/press/find',
      data:Qs.stringify(id)
  })
}