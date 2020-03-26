import {request} from './request.js'

export function addType(FormData){
  return request({
      method: 'post',
      url:'/pressType/save',
      data:FormData
  })
}

export function getType(pageNumber,pageSize){
  return request({
      method: 'get',
      url:'/pressType/list',
      params:{
        pageNumber,
        pageSize
      }
  })
}


export function deleteType(id){
  return request({
      method: 'get',
      url:'/pressType/delete',
      params:{
        id
      }
  })
}


export function selectType(id){
  return request({
      method: 'get',
      url:'/pressType/find',
      params:{
        id
      }
  })
}


export function updateType(FormData){
  return request({
      method: 'post',
      url:'/pressType/update',
      data:FormData
  })
}