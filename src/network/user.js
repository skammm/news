import {request} from './request.js'

export function userLogin(formDate){
  return request({
      method: 'get',
      url:'/userInfo/login',
      params:formDate
  })
}
export function addUser(form){
    return request({
        method: 'get',
        url:'/userInfo/register',
        params:form
    })
}

export function getUser(pageNumber,pageSize){
  return request({
      method: 'get',
      url:'/userInfo/list',
      params:{
        pageNumber,
        pageSize
      }
  })
}


export function deleteUser(id){
  return request({
      method: 'get',
      url:'/userInfo/delete',
      params:{
        id
      }
  })
}

export function updateUser(form){
  return request({
      method: 'get',
      url:'userInfo/modUserInfo',
      params:form
  })
}



export function findUser(userId){
  return request({
      method: 'get',
      url:'/userInfo/findById',
      params:{
        userId
      }
  })
}


export function getDepartment(){
  return request({
      method: 'get',
      url:'/department/list',
      
  })
}