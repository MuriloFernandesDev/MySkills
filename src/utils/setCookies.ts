import { parseCookies, setCookie } from 'nookies'

export const setCookies = (key: string, value: string | number | object) => {
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  setCookie(undefined, key, value, {
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    path: '/',
  })
}
