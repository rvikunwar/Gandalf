import axios from 'axios';
import { loginProps } from './apiTypes';
import { store } from '../store';

export const BASE_URL = 'https://dev-api-gandalf.azurewebsites.net'

export const authAxios = axios.create({
    baseURL: BASE_URL,
});

export const UserAxios = axios.create({
    baseURL: BASE_URL,
});


const responseBody = (response: any) => response.data;



UserAxios.interceptors.request.use( (config) => {

    let access_token = store.getState().user.token

    if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;

    },
    (error) => {
        return Promise.reject(error);
    }
);


const requests = {
    get: (url: string) => UserAxios.get(url).then(responseBody),
    post: (url: string, body: any) => UserAxios.post(url, body).then(responseBody),
    put: (url: string, body: any) => UserAxios.put(url, body).then(responseBody),
    del: (url: string) => UserAxios.delete(url).then(responseBody),
};


// This will contain all the endpoints of the resources
export const endPoints = {
    login: 'auth/login/',
    getUsers: 'user',
    userDetails: (userId: number, userRole: number) => `user/profile/${userId}/${userRole}`,
    userjob: (userId: number) => `jobapplication/appliedJobs/${userId}`
}

export const GandalfAppAPI = {

    //for login
    login: (body: loginProps) => authAxios.post(`${BASE_URL}/${endPoints.login}`, body).then(responseBody),

    //for fetching user
    getAllUsers: () => requests.get(`${BASE_URL}/${endPoints.getUsers}`),

    //fetching user details
    getUserDetails: (userId: number, userRole: number) => 
            requests.get(`${BASE_URL}/${endPoints.userDetails(userId, userRole)}`),

    //fetch job application by user
    getJobApplication:  (userId: number) => 
        requests.get(`${BASE_URL}/${endPoints.userjob(userId)}`)

}