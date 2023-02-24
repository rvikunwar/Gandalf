import axios from 'axios';
import { loginProps } from './apiTypes';

export const BASE_URL = 'https://dev-api-gandalf.azurewebsites.net'

export const authAxios = axios.create({
    baseURL: BASE_URL,
});

export const UserAxios = axios.create({
    baseURL: BASE_URL,
});


const responseBody = (response: any) => response.data;


// UserAxios.interceptors.request.use( (config) => {
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );


const requests = {
    get: (url: string) => UserAxios.get(url).then(responseBody),
    post: (url: string, body: any) => UserAxios.post(url, body).then(responseBody),
    put: (url: string, body: any) => UserAxios.put(url, body).then(responseBody),
    del: (url: string) => UserAxios.delete(url).then(responseBody),
};


// THis will contain all the endpoints of the resources
export const endPoints = {
    login: '/auth/login/',
}

export const GandalfAppAPI = {

    //for login
    login: (body: loginProps) => requests.post(`${BASE_URL}/${endPoints.login}`, body)


}