import http from "./HttpService";

export const LoginUser = (data) => {
    return http.post('/user/login', data);
}