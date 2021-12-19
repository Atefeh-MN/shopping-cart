import http from "./HttpService";

export const signupUser = (data) => {
    return http.post('/user/register', data);
}