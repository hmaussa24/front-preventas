import http, { AxiosRequestConfig, AxiosResponse } from "axios";
export const httpGet = <R>(url: string, config?: Pick<AxiosRequestConfig, 'params' | 'headers'>): Promise<AxiosResponse<R>> => http.get<R>(url, { ...config });
export const httpPost = <B, R>(url: string, body: B, config?: Pick<AxiosRequestConfig, 'params' | 'headers'>): Promise<AxiosResponse<R>> => { return http.post<R>(url, body, { ...config }) };
