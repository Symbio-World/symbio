import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export type Fetch<T> = (config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>

export const fetch = axios

export class HttpError extends Error {
  constructor(message) {
    super(message)
    this.name = 'HttpError'
    this.message = message
  }
}
