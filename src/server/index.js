var api = {}
if (process.env.NODE_ENV === 'production') {
  api = require('./api.prod').default
} else {
  api = require('./api.dev').default
}
/**
 * cnpm run dev
 * 改用线上服务器地址
 */
api = require('./api.prod').default

export default (url) => {
  for (const key in api) {
    const reg = new RegExp(`^/?:${key}`)
    if (reg.test(url)) {
      return url.replace(reg, api[key])
    }
  }
  return url
}
