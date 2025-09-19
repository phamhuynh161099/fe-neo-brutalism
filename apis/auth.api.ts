import { AuthResponse } from "../types/auth.type";
import http from "../utils/http";
/**
 * Need separate
 */
export const URL_AUTH_TOKEN = "auth/getToken";
export const URL_REGISTER = "register";
export const URL_LOGOUT = "auth/logOut";
export const URL_REFRESH_TOKEN = "refresh-access-token";
export const URL_ME = "auth/getMe";

const authApi = {
    /**
     * Test register account
     */
    registerAccount(body: { username: string; password: string }) {
        return http.post<AuthResponse>(URL_REGISTER, body);
    },

    /**
     * Test login
     */
    login(body: { username: string; password: string }) {
        return http.get<any>(URL_AUTH_TOKEN + `?username=${body.username}&password=${body.password}`);
    },

    /**
     * Test logout
     */
    logout() {
        return http.get(URL_LOGOUT);
    },

    /**
     * getMe
     */
    getMe() {
        return http.get<any>(URL_ME);
    },
};

export default authApi;
