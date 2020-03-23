import axios from 'axios'
import {
  FetchTranslateResponse,
  FetchProductPage,
  FetchSearchResponse,
} from 'fetcher-core'
import { config } from './config'

export const fetchSearchResponse: FetchSearchResponse = async barcode => {
  const result = await axios.get(config.googleSearch.url, {
    params: {
      key: config.googleSearch.key,
      cx: config.googleSearch.cx,
      q: barcode,
    },
  })
  return result.data
}

export const fetchProductPage: FetchProductPage = async link => {
  const result = await axios.get(link)
  return result.data
}

export const fetchTranslateResponse: FetchTranslateResponse = async strings => {
  const result = await axios.post(
    config.googleTranslate.url,
    {
      q: strings,
      target: config.googleTranslate.target,
    },
    {
      params: {
        key: config.googleTranslate.key,
      },
    },
  )
  return result.data
}
