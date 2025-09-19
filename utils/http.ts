import axios, { AxiosError, type AxiosInstance } from "axios";
import { isAxiosUnauthorizedError } from "./utils";
import { clearLS, getAccessTokenFromLS, setAccessTokenToLS, setProfileToLS } from "./auth";
import CONFIG from "../constants/config";
import { URL_AUTH_TOKEN, URL_LOGOUT, URL_REGISTER } from "../apis/auth.api";
import HttpStatusCode from "../constants/httpStatusCode.enum";
import { ErrorResponse } from "../types/utils.type";


export const isClient = typeof window !== 'undefined'

export class Http {
    instance: AxiosInstance;
    private accessToken: string;
    // private currentController: AbortController | null = null; // Thêm AbortController
    constructor() {
        this.accessToken = isClient ? getAccessTokenFromLS() || "" : "";
        this.instance = axios.create({
            baseURL: CONFIG.baseUrl,
            timeout: 10000 * 60 * 10,
            headers: {
                "Content-Type": "application/json",
                // "expire-access-token": 60 * 60 * 24, // 1 ngày
            },
        });
        this.instance.interceptors.request.use(
            (config: any) => {
                if (this.accessToken && config.headers) {
                    config.headers.authorization = 'Bearer ' + this.accessToken;
                    return config;
                }
                return config;
            },
            (error: any) => {
                return Promise.reject(error);
            }
        );
        // Add a response interceptor
        this.instance.interceptors.response.use(
            (response: any) => {
                const { url } = response.config;

                // console.log('URL',url)

                if (url?.includes(URL_AUTH_TOKEN) || url === URL_REGISTER) {
                    const data = response.data;
                    this.accessToken = data.token;
                    isClient && setAccessTokenToLS(this.accessToken);
                    isClient && setProfileToLS(data);


                } else if (url === URL_LOGOUT) {
                    this.accessToken = "";
                    isClient && clearLS();
                }
                return response;
            },
            (error: AxiosError) => {
                // Error code 422 401
                console.log('Axios Error', error)
                if (
                    ![
                        HttpStatusCode.UnprocessableEntity,
                        HttpStatusCode.Unauthorized,
                    ].includes(error.response?.status as number)
                ) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const data: any | undefined = error.response?.data;
                    const message = data?.message || error.message;
                    //   toast.error(message)
                }

                if (error.code === 'ERR_NETWORK') {
                    isClient && clearLS();
                    this.accessToken = "";
                }

                // Nếu là lỗi 401
                if (
                    isAxiosUnauthorizedError<
                        ErrorResponse<{ name: string; message: string }>
                    >(error)
                ) {
                    isClient && clearLS();
                    this.accessToken = "";
                }
                return Promise.reject(error);
            }
        );
    }

}
const http = new Http().instance;
export default http;
