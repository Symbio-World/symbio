export type Method = 'GET' | 'POST'

type RequestConfig = {
  url: string;
  method: Method;
  params?: any;
  data?: any;
}

type Response<T> = {
  data: T
}

export type Fetch = <T>(config: RequestConfig) => Promise<Response<T>>

export class HttpError extends Error {
  // @ts-ignore
  constructor(message) {
    super(message)
    this.name = 'HttpError'
    this.message = message
  }
}
