import axios from "axios";
export const __IS_DEV__ = !import.meta.env.PROD;
const BASE_URL=__IS_DEV__?"https://service-2b.ru/ozon/api/":"/ozon/api/";
const DevUserId=localStorage.getItem("DevUserId");
const headers = __IS_DEV__
    ?{
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Dev-token': DevUserId?DevUserId:"0",
        'Project': 'ozon'
    }
    :{
        'Project': 'ozon',
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }

export const $apiAuth=axios.create({
    baseURL: 'https://service-2b.ru/auth/api/',
    headers: headers
})

export const $apiOzon=axios.create({
    baseURL: BASE_URL,
    headers: headers
})