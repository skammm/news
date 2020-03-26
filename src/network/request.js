import axios from 'axios'

axios.defaults.withCredentials = true;
export function request(config){
    //创建axios的实例
    const instance = axios.create({
        // baseURL:'http://localhost:8081',
        timeout:500000
    })
    //axios拦截器
    // instance.interceptors.request.use(config => {
    //     return config;
    // },err => {
    //     console.log(err)
    // })
    // instance.interceptors.response.use(res => {
    //     return res;
    // },err => {
    //     console.log(err)
    // })
    //发送真正的网络请求
    return instance(config)
}