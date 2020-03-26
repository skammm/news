import {request} from './request.js'
export function getNoticeMultidata(pageNumber,pageSize){
    return request({
        method: 'get',
        url:'/notice/list',
        params:{
            pageNumber,
            pageSize
        }
    })
}



export function postNoticeMultidata(form){
    return request({
        method:'get',
        url:'/notice/save',
        params:form
    })
}


export function deleteNoticeMultidata(id){
    return request({
        method:'get',
        url:'/notice/delete',
        params:{
            id
        }
    })
}


export function findNoticeMultidata(id){
    return request({
        method:'get',
        url:'/notice/find',
        params:{
            id
        }
    })
}

export function updateNoticeMultidata(form){
    return request({
        method:'get',
        url:'/notice/update',
        params:form
    })
}