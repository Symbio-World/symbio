import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

type RequestConfig = Pick<
  AxiosRequestConfig,
  'method' | 'url' | 'data' | 'params'
>

type Response<T> = AxiosResponse<T>

export type Fetch = <T>(config: RequestConfig) => Promise<Response<T>>
export const fetch: Fetch = <T>(config: RequestConfig) =>
  axios.request<T>(config)

export class HttpError extends Error {
  // @ts-ignore
  constructor(message) {
    super(message)
    this.name = 'HttpError'
    this.message = message
  }
}
